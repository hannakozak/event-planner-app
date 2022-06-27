import styled from 'styled-components';
import { MdDeleteOutline } from 'react-icons/md';

export const DeleteIcon = styled(MdDeleteOutline)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.bondiBlue};
  font-weight: 500;
`;
