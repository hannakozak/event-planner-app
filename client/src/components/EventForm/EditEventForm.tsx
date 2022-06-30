import React, { useState } from 'react';
import { FormInput } from '../FormInput/FormInput';
import { Modal } from '../Modal/Modal';
import { useFetch } from '../../hooks/useFetch';
import { Controller, useForm } from 'react-hook-form';
import { useModal } from '../../hooks/useModal';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FormStyled,
  DatePickerStyled,
  LabelStyled,
  EditIcon,
} from './EventForm.styled';

type EditEventFormProps = {
  selectedEvent: EventType;
  getEvents: () => Promise<any>;
  onCancel: (closeModal) => void;
};

type EventType = {
  _id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
};

export const EditEventForm = ({
  selectedEvent,
  getEvents,
  onCancel,
}: EditEventFormProps) => {
  const defaultValues = {
    _id: selectedEvent._id,
    title: selectedEvent.title,
    description: selectedEvent.description,
    start: selectedEvent.start,
    end: selectedEvent.end,
  };

  const { isModalVisible, toggleModalVisibility } = useModal();
  const [editedEvent, setEditedEvent] = useState<EventType>(defaultValues);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: editedEvent,
  });

  const { sendRequest } = useFetch();
  const eventId = selectedEvent._id;

  const onSubmit = async (data) => {
    const result = await sendRequest(
      `/api/events/${eventId}`,
      'PUT',
      JSON.stringify(data),
      {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
    );
    toast.success('Event edited successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
    setEditedEvent(result.data);
    toggleModalVisibility();
    onCancel(toggleModalVisibility);
    getEvents();
  };

  return (
    <>
      <EditIcon onClick={toggleModalVisibility} />
      <Modal
        isVisible={isModalVisible}
        onSubmit={handleSubmit(onSubmit)}
        onCancel={toggleModalVisibility}
        submitButtonLabel="Edit"
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
                onChange={(date) => field.onChange(date)}
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
                onChange={(date) => field.onChange(date)}
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
