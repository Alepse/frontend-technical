import { type InputHTMLAttributes } from 'react';
import '../../assets/styles/TextInput.css';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  id: string;
}

export const TextInput = (props: TextInputProps) => {
  const { id, className = '', error, ...rest } = props;
  
  return (
    <div className="input-group">
      <input
        id={id}
        className={`input-field ${error ? 'input-error' : ''} ${className}`}
        {...rest}
      />
    </div>
  );
};
