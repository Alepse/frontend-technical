interface ErrorDisplayProps {
  message?: string;
}

export const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
  if (!message) return null;
  
  return (
    <div className="error-text" role="alert">
      {message}
    </div>
  );
};
