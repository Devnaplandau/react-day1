import React, { useState } from "react";
import TodoList from "./component/TodoList";
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "learn React ",
      status: "new",
    },
    {
      id: 2,
      title: "learn Figma ",
      status: "complete",
    },
    {
      id: 3,
      title: "learn Fullstack ",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterTodo, setFilterTodo] = useState("all");
  const handleTodoClick = (item, index) => {
    // clone current array to the new once
    const newTodoList = [...todoList];
    // toggle state
    // spread can be overwrite attribute of object have been clone
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "complete" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    setFilterTodo("all");
  };
  const handleShowComplete = () => {
    setFilterTodo("complete");
  };
  const handleShowNew = () => {
    setFilterTodo("new");
  };
  const renderFilterTodo = todoList.filter(
    (todo) => filterTodo === "all" || filterTodo === todo.status
  );
  console.log(renderFilterTodo);
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderFilterTodo} onTodoClick={handleTodoClick} />
      <div className="">
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowComplete}>Show Complete</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
