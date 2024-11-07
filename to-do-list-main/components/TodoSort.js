// components/TodoSort.js
import React from 'react';

export default function TodoSort({ sortOption, handleSortChange }) {
  return (
    <div className="todo__sort">
      <label htmlFor="sort" className="todo__sort-label">Sort by:</label>
      <select
        id="sort"
        className="todo__sort-select"
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
