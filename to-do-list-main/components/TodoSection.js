// components/TodoSection.js
import React from 'react';
import TodoList from './TodoList';

export default function TodoSection({ title, todos, toggleCompleteTodo, handleDeleteTodo }) {
  return (
    <div className="todo__section">
      <h2>{title}</h2>
      <TodoList
        todos={todos}
        toggleCompleteTodo={toggleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
