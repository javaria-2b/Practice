// Error.tsx
'use client'
import React from 'react';

interface ErrorProps {
  message: string; // You can pass the error message as a prop
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-message">
        {/* Display the passed error message */}
        Error: {message}
      </div>
    </div>
  );
};

export default Error;
