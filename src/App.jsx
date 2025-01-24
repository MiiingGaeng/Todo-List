import React from 'react';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

export const App = () => {
  //state - 로컬스토리지 연동
  const todoList = JSON.parse(localStorage.getItem('todoList', [])) || [];
  const [todos, setTodos] = useState(todoList);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
