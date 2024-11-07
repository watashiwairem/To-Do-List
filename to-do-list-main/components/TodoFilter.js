// components/TodoFilter.js
import React from 'react';

export default function TodoFilter({ filterText, handleFilterChange }) {
  return (
    <div className="todo__filters">
      <input
        className="todo__search-input"
        type="text"
        placeholder="Search tasks"
        value={filterText}
        onChange={handleFilterChange}
      />
      <select
        className="todo__filter-select"
        onChange={handleFilterChange}
      >
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
