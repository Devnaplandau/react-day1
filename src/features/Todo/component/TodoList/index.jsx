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

function TodoList(props) {
  const { todoList, onTodoClick } = props;
  const handleTodoList = (item, index) => {
    if (!onTodoClick) return;

    onTodoClick(item, index);
  };
  return (
    <ul className="todo-list">
      {todoList.map((item, index) => (
        <li
          key={item.id}
          className={classnames({
            "todo-item": true,
            complete: item.status === "complete",
          })}
          onClick={() => handleTodoList(item, index)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
