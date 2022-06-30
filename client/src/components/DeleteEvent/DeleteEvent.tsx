import React from 'react';
import { Text } from '../Typography/Typography';
import { Modal } from '../Modal/Modal';
import { useFetch } from '../../hooks/useFetch';
import { useModal } from '../../hooks/useModal';
import { DeleteIcon } from './DeleteEvent.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type EventType = {
  _id: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
};

type DeleteEventProps = {
  selectedEvent: EventType;
  getEvents: () => Promise<any>;
  onCancel: (closeModal) => void;
};
export const DeleteEvent = ({
  selectedEvent,
  getEvents,
  onCancel,
}: DeleteEventProps) => {
  const { sendRequest } = useFetch();
  const { isModalVisible, toggleModalVisibility } = useModal();
  const eventId = selectedEvent._id;

  const deleteEvent = async () => {
    await sendRequest(
      `/api/events/${eventId}`,
      'DELETE',
      {},
      { credentials: 'include' },
    );
    toast.success('Event deleted!', {
      position: toast.POSITION.TOP_CENTER,
    });
    getEvents();
    onCancel(toggleModalVisibility);
  };
  return (
    <>
      <DeleteIcon onClick={toggleModalVisibility} />
      <Modal
        isVisible={isModalVisible}
        onSubmit={deleteEvent}
        onCancel={toggleModalVisibility}
        submitButtonLabel="Delete"
      >
        <Text color={'#D0342C'}>
          Are you sure to delete {selectedEvent.title} event?
        </Text>
      </Modal>
    </>
  );
};
