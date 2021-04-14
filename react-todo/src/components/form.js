import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" class="todo-input" />
        <button class="todo-button" type="submit">
          <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Ready To Start</option>
          </select>
        </div>
      </form>
    );
  }
}
