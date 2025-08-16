import React from 'react';

const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = "px-4 py-2 rounded font-medium focus:outline-none transition-colors";
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
