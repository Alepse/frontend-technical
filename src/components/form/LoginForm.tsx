import { useState, type FormEvent, type ChangeEvent } from 'react';
import { TextInput } from '../ui/TextInput';
import { PasswordInput } from '../ui/PasswordInput';
import { Button } from '../ui/Button';
import { FormField } from '../ui/FormField';
import type { LoginData, ValidationErrors } from '../../types';
import { ErrorDisplay } from '../ui/ErrorDisplay';
import '../../assets/styles/LoginForm.css';

export function LoginForm() {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: ValidationErrors = {};
    let valid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    // API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({ email: '', password: '' });
    } catch {
      setErrors({ general: 'Something went wrong' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className="login-form-container"
      onSubmit={handleSubmit} 
      noValidate
    >
      <div className="form-header">
        <div className="form-subtitle-small">Login your account</div>
        <h2 className="form-title">Welcome Back!</h2>
        <div className="form-subtitle">Enter your email and password</div>
      </div>

      <ErrorDisplay message={errors.general} />

      {submitSuccess && (
        <div className="form-success">
          Login successful! Redirecting...
        </div>
      )}

      <FormField 
        label="Email" 
        htmlFor="email" 
        error={errors.email}
        required
      >
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField 
        label="Password" 
        htmlFor="password" 
        error={errors.password}
        required
      >
        <PasswordInput
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          disabled={isSubmitting}
        />
      </FormField>

      <div className="form-actions">
        <Button 
          type="submit" 
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
      </div>

      <div className="form-footer">
        <p>
          Forgot your password? <a href="#" className="link-reset">Reset here</a>
        </p>
      </div>
    </form>
  );
}
