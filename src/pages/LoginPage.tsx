import { LoginForm } from '../components/form/LoginForm';
import '../assets/styles/LoginPage.css';

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
};
