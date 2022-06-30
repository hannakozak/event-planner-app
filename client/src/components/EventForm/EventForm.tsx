import React from 'react';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { FormInput } from '../FormInput/FormInput';
import { useFetch } from '../../hooks/useFetch';
import { Controller, useForm } from 'react-hook-form';
import { useModal } from '../../hooks/useModal';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import { FormStyled, DatePickerStyled, LabelStyled } from './EventForm.styled';

type EventFormProps = {
  getEvents: () => Promise<void>;
};

export const EventForm = ({ getEvents }: EventFormProps) => {
  const { isModalVisible, toggleModalVisibility } = useModal();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { sendRequest } = useFetch();

  const onSubmit = async (data) => {
    await sendRequest('/api/events', 'POST', JSON.stringify(data), {
      'Content-Type': 'application/json',
      credentials: 'include',
    });
    toast.success('New event added!', {
      position: toast.POSITION.TOP_CENTER,
    });
    toggleModalVisibility();
    getEvents();
    reset();
  };

  return (
    <>
      <Button type="button" variant="primary" onClick={toggleModalVisibility}>
        Add Event
      </Button>
      <Modal
        isVisible={isModalVisible}
        onSubmit={handleSubmit(onSubmit)}
        onCancel={toggleModalVisibility}
        submitButtonLabel="createEvent"
      >
        <FormStyled>
          <FormInput
            register={register('title')}
            name="title"
            type="text"
            label="Event Name"
          />

          <FormInput
            register={register('description')}
            name="description"
            type="text"
            label="Description"
          />
          <LabelStyled>Select event start date</LabelStyled>
          <Controller
            control={control}
            name="start"
            render={({ field }) => (
              <DatePickerStyled
                onChange={(start) => field.onChange(start)}
                selected={field.value}
                value={field.value}
                showTimeSelect
                timeFormat="HH:mm"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="form-control"
                id="start"
              />
            )}
          />
          <LabelStyled>Select event end date</LabelStyled>
          <Controller
            control={control}
            name="end"
            render={({ field }) => (
              <DatePickerStyled
                onChange={(end) => field.onChange(end)}
                selected={field.value}
                value={field.value}
                timeFormat="HH:mm"
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeSelect
                className="form-control"
                id="end"
              />
            )}
          />
        </FormStyled>
      </Modal>
    </>
  );
};
