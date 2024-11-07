// pages/index.js
import React, { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoSort from "../components/TodoSort";
import TodoFilter from "../components/TodoFilter";
import TodoSection from "../components/TodoSection";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [filterText, setFilterText] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([{ text: inputValue, completed: false, id: Date.now() }, ...todos]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleCompleteTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event) => {
    if (event.target.type === 'text') {
      setFilterText(event.target.value);
    } else {
      // Handle filtering based on completed or pending
    }
  };

  const sortTodos = (todos) => {
    return [...todos].sort((a, b) => {
      if (sortOption === "newest") return b.id - a.id;
      if (sortOption === "oldest") return a.id - b.id;
      if (sortOption === "completed") return a.completed - b.completed;
      if (sortOption === "pending") return b.completed - a.completed;
      return 0;
    });
  };

  const filteredTodos = todos.filter((todo) => {
    const searchMatch = todo.text.toLowerCase().includes(filterText.toLowerCase());
    // Add more filtering logic if needed
    return searchMatch;
  });

  const pendingTodos = sortTodos(filteredTodos.filter((todo) => !todo.completed));
  const completedTodos = sortTodos(filteredTodos.filter((todo) => todo.completed));

  return (
    <div className="todo">
      <h1 className="todo__heading">To Do List</h1>
      <TodoInput inputValue={inputValue} handleInputChange={handleInputChange} handleAddTodo={handleAddTodo} />
      <TodoSort sortOption={sortOption} handleSortChange={handleSortChange} />
      <TodoFilter filterText={filterText} handleFilterChange={handleFilterChange} />
      <div className="todo__sections">
        <TodoSection
          title="Pending"
          todos={pendingTodos}
          toggleCompleteTodo={toggleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        <TodoSection
          title="Completed"
          todos={completedTodos}
          toggleCompleteTodo={toggleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </div>
    </div>
  );
}
