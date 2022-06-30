import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Main = styled.main`
  margin-top: 6rem;
  text-align: center;
  overflow: auto;
`;

export const StyledToast = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    width: 100%;
    font-size: 1.4rem;
    @media ${({ theme }) => theme.device.laptop} {
      width: 50%;
    }
  }

  .Toastify__toast {
    color: ${({ theme }) => theme.colors.bondiBlue};
  }
  .Toastify__toast-icon {
  }
  .Toastify__progress-bar {
    background: ${({ theme }) => theme.colors.bondiBlue};
  }
`;
