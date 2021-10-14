import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';;

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ffdf00' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #010606;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
    color: #010606;
  }
`;
