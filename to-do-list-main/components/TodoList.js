// components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleCompleteTodo, handleDeleteTodo }) {
  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleteTodo={toggleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}
