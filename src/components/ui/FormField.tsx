import { type ReactNode } from 'react';
import { Label } from './Label';
import { ErrorDisplay } from './ErrorDisplay';

interface FormFieldProps {
  label: string;
  error?: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}

export const FormField = ({
  label,
  error,
  htmlFor,
  required,
  children
}: FormFieldProps) => {
  return (
    <div className="form-field-wrapper">
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      {children}
      {error && <ErrorDisplay message={error} />}
    </div>
  );
};
