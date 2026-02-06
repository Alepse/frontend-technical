import { useState } from 'react';
import { TextInput, type TextInputProps } from './TextInput';
import '../../assets/styles/PasswordInput.css';

type PasswordInputProps = Omit<TextInputProps, 'type'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input-wrapper">
      <TextInput
        {...props}
        type={showPassword ? 'text' : 'password'}
        className="password-field"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="password-toggle"
      >
        {showPassword ? 'HIDE' : 'SHOW'}
      </button>
    </div>
  );
};
