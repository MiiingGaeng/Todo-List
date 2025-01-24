import React from 'react';

export const Button = ({ children, type, onClick }) => {
  const buttonStyle = {
    width: '70px',
    height: '30px',
    borderRadius: '10px',
    background: '#ffe492',
    border: 'none',
  };

  return (
    <button type={type} onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};
