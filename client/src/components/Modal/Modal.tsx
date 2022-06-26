import React from 'react';
import ReactDOM from 'react-dom';
import {
  ModalStyled,
  BackdropStyled,
  CloseIcon,
  ModalHeader,
  ButtonsWrapper,
} from './Modal.styled';
import { Button } from '../Button/Button';
import { Heading } from '../Typography/Typography';

type ModalProps = {
  title?: string;
  isVisible: boolean;
  onCancel?: () => void;
  onCancelSecondModal?: (closeModal) => void;
  onSubmit?: (e: React.SyntheticEvent) => void;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  children: React.ReactNode;
};

export const Modal = ({
  title,
  isVisible,
  onCancel,
  onCancelSecondModal,
  onSubmit,
  submitButtonLabel,
  cancelButtonLabel,
  children,
}: ModalProps) => {
  return isVisible
    ? ReactDOM.createPortal(
        <>
          <BackdropStyled />
          <ModalStyled>
            <div>
              <ModalHeader>
                <Heading level={2} color="#00ADB5">
                  {title}
                </Heading>
                {onCancel && <CloseIcon onClick={onCancel} />}
                {onCancelSecondModal && (
                  <CloseIcon onClick={onCancelSecondModal} />
                )}
              </ModalHeader>
              <div>{children ? <div>{children}</div> : null}</div>
              <ButtonsWrapper>
                {onCancel && (
                  <Button variant="secondary" onClick={() => onCancel()}>
                    {cancelButtonLabel ?? 'Cancel'}
                  </Button>
                )}
                {onCancelSecondModal && (
                  <Button
                    variant="secondary"
                    onClick={(closeModal) => onCancelSecondModal(closeModal)}
                  >
                    {cancelButtonLabel ?? 'Cancel'}
                  </Button>
                )}
                {onSubmit && (
                  <Button variant="primary" onClick={(e) => onSubmit(e)}>
                    {submitButtonLabel ?? 'Submit'}
                  </Button>
                )}
              </ButtonsWrapper>
            </div>
          </ModalStyled>
        </>,
        document.body,
      )
    : null;
};
