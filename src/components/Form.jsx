import React from 'react';
import { useState } from 'react';

export const Form = ({ newTodo, handleSubmit, handleInputChange }) => {
  //style
  const formStyle = {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    borderBottom: '1px solid #ffe492',
  };
  const inputStyle = {
    width: '170px',
    height: '25px',
    borderRadius: '8px',
    padding: '0 5px',
    fontSize: '12px',
    border: '1px solid #777',
  };

  const buttonStyle = {
    width: '50px',
    height: '25px',
    borderRadius: '8px',
    border: 'none',
    background: '#ffe492',
    color: '#555',
    fontSize: '12px',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        style={inputStyle}
        placeholder="Enter new things to do!"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="button" style={buttonStyle} onClick={handleSubmit}>
        ADD
      </button>
    </form>
  );
};
