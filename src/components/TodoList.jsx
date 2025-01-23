import React from 'react';
import { Form } from './Form';
import { useState } from 'react';

const sampleTodos = [
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

export const TodoList = () => {
  //style
  const ulStyle = {
    width: '300px',
    borderRadius: '20px',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    gap: '10px',
    padding: '20px',
  };

  //state
  const [todos, setTodos] = useState(sampleTodos);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    setTodos([{ id: Date.now(), text: newTodo }, ...todos]);
    setNewTodo('');

    console.log('todos', todos);
  };

  const handleInputChange = (e, newThing) => {
    newThing = e.target.value;
    setNewTodo(newThing, ...newTodo);
  };

  return (
    <ul style={ulStyle}>
      <h3>TODO LIST</h3>
      <Form
        newTodo={newTodo}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      {todos.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};
