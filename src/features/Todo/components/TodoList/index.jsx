import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],

  onTodoClick: null,
};
function TodoList({ todoList, onTodoClick }) {
  const handleTodoList = (todo, todoId) => {
    if (!onTodoClick) return;

    onTodoClick(todo, todoId);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoList(todo, index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
