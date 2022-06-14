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
  onCancel: () => void;
  onSubmit: (e: React.SyntheticEvent) => void;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  children: React.ReactNode;
};

export const Modal = ({
  title,
  isVisible,
  onCancel,
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
                <Heading level={1} color="#00ADB5">
                  {title}
                </Heading>
                <CloseIcon onClick={onCancel} />
              </ModalHeader>
              <div>{children ? <div>{children}</div> : null}</div>
              <ButtonsWrapper>
                <Button variant="secondary" onClick={() => onCancel()}>
                  {cancelButtonLabel ?? 'Cancel'}
                </Button>
                <Button variant="primary" onClick={(e) => onSubmit(e)}>
                  {submitButtonLabel ?? 'Submit'}
                </Button>
              </ButtonsWrapper>
            </div>
          </ModalStyled>
        </>,
        document.body,
      )
    : null;
};
