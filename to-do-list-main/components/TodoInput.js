// components/TodoInput.js
import React from 'react';

export default function TodoInput({ inputValue, handleInputChange, handleAddTodo }) {
  return (
    <div className="todo__input-wrapper">
      <input
        className="todo__input"
        type="text"
        placeholder="Add a new task +"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="todo__add-button" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}
