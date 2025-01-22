import React from 'react';

export const TodoList = () => {
  const todos = [
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Clean the house' },
    { id: 3, text: 'Go for a run' },
    { id: 4, text: 'Finish homework' },
    { id: 5, text: 'Call mom' },
    { id: 6, text: 'Buy groceries' },
    { id: 7, text: 'Walk the dog' },
    { id: 8, text: 'Read a book' },
    { id: 9, text: 'Do laundry' },
    { id: 10, text: 'Write code' },
  ];

  const ulStyle = {
    width: '300px',
    height: '400px',
    borderRadius: '20px',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    gap: '10px',
  };

  return (
    <ul style={ulStyle}>
      <h3>TODO LIST</h3>
      {todos.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};
