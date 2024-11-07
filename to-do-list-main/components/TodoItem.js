// components/TodoItem.js
import React from 'react';

export default function TodoItem({ todo, toggleCompleteTodo, handleDeleteTodo }) {
  return (
    <li className="todo__list-item">
      <span className={`todo__text ${todo.completed ? 'todo__text--completed' : ''}`}>
        {todo.text}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleteTodo(todo.id)}
        className="todo__checkbox"
      />
      <button
        className="todo__delete-button"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        X
      </button>
    </li>
  );
}
