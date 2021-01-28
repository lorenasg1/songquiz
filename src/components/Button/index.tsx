import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;

  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1rem;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;

  &:hover:enabled,
  &:focus:enabled {
    opacity: 0.5;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ type, disabled, ...rest }: ButtonProps) {
  return <ButtonContainer type={type} disabled={disabled} {...rest} />;
}
