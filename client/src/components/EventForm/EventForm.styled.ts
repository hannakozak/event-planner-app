import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 500px;
  padding: 5rem;
  width: 100vw;
  @media ${({ theme }) => theme.device.mobileM} {
    width: 70vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 40vw;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 30vw;
  }
`;

export const LabelStyled = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.colors.bondiBlue};
  font-weight: 500;
`;

export const DatePickerStyled = styled(DatePicker)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  border: 1px solid ${({ theme }) => theme.colors.blueStone};
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: 500;
  width: 100%;
  margin: 1rem 0;
`
