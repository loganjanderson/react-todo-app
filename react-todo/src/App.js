import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todo-list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    handleFilter();
  }, [todos, status]);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Logan's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
