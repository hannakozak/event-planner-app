import styled from "styled-components";
import { CgCloseR } from 'react-icons/cg';

export const CloseIcon = styled(CgCloseR)`
  position: absolute;
  right: 5%;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.bondiBlue};
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonsWrapper = styled.div`
  text-align: right;
`
export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.ebonyClay};
  opacity: 0.9;
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 10%;
  left: 5%;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0px 3px 7px ${({ theme }) => theme.colors.bondiBlue};
  z-index: 30;
  overflow: auto;
  max-height: 95%;
    @media ${({ theme }) => theme.device.mobileS} {
      left: 10%;
      width: 80%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      left: 20%;
      width: 60%;
    }
    @media ${({ theme }) => theme.device.laptop} {
      left: 30%;
      width: 40%;
    }
`;