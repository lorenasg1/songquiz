import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputContainer = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 25px;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ onChange, placeholder, ...rest }: InputProps) {
  return (
    <div>
      <InputContainer onChange={onChange} placeholder={placeholder} {...rest} />
    </div>
  );
}
