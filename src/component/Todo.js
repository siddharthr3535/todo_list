// src/Todo.js
import React, { useState } from 'react';
// import './styles.css'; // Import the custom styles

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setInputValue(todos[index].text); // Set the input value to the todo text being edited
    removeTodo(index); // Remove the original todo item while editing
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List</h1>
      <div className="TodoForm">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
        />
        {inputValue ? (
          <button onClick={addTodo} className="todo-btn">
            Add
          </button>
        ) : (
          <button onClick={addTodo} className="todo-btn" disabled>
            Add
          </button>
        )}
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="Todo">
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)} className="remove-btn">
              Remove
            </button>
            <button onClick={() => editTodo(index)} className="edit-btn">
              Edit
            </button>
            <button
              onClick={() => toggleCompleted(index)}
              className="completed-btn"
            >
              {todo.completed ? 'Uncomplete' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
