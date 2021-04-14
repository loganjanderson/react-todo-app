import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const handleInputText = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={handleInputText}
        type="text"
        className="todo-input"
      />
      <button onClick={handleSubmitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Ready To Start</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
