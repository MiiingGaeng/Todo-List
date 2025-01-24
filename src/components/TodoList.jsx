import React from 'react';
import { Button } from '../common/Button';
import './todoList.css';

export const TodoList = ({ todos, setTodos }) => {
  //삭제로직
  const deleteList = (id) => {
    const filteredList = [...todos].filter((todo) => {
      return todo.id !== id;
    });

    // todos 업데이트
    setTodos(filteredList);
    localStorage.setItem('todoList', JSON.stringify(filteredList));
  };

  return (
    <ul id="li-wrapper">
      {!todos.length ? (
        <li>Nothing Updated</li>
      ) : (
        todos.map(({ id, title }) => {
          return (
            <li key={id}>
              <p>{title}</p>
              <Button
                type="button"
                onClick={() => {
                  deleteList(id);
                }}
              >
                DELETE
              </Button>
            </li>
          );
        })
      )}
    </ul>
  );
};
