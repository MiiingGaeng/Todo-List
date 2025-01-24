import React from 'react';
import { useState } from 'react';
import { Button } from '../common/Button';
import './form.css';

export const Form = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState({
    id: '',
    title: '',
  });
  const { title } = newTodo;

  //추가로직
  const addList = (e) => {
    //새로고침 방지
    e.preventDefault();

    //유효성 검사 : 빈칸 제출 거르기
    if (!title.trim()) {
      alert('fill the form, plz!');
      return;
    }

    // todos 업데이트
    const updateTodoList = [...todos, newTodo];
    setTodos(updateTodoList);
    localStorage.setItem('todoList', JSON.stringify(updateTodoList));
  };

  const handleChange = (e) => {
    //newTodo set하기
    const newThing = { id: Date.now(), title: e.target.value };

    setNewTodo(newThing);
  };

  return (
    <div id="form-wrapper">
      <h1>Todo List</h1>
      <form onSubmit={addList}>
        <input
          type="text"
          placeholder="Enter new things to do!"
          value={title}
          onChange={handleChange}
        />
        <Button type="submit" onClick={addList}>
          SUBMIT
        </Button>
      </form>
    </div>
  );
};
