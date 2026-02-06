import { type LabelHTMLAttributes } from 'react';
import '../../assets/styles/Label.css';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = ({ 
  children, 
  required, 
  className = '', 
  ...props 
}: LabelProps) => {
  return (
    <label className={`label ${className}`} {...props}>
      {children}
      {required && <span className="label-required">*</span>}
    </label>
  );
};
