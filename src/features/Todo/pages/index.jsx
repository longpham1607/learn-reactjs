import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import queryString from "query-string";
import TodoForm from "../components/TodoForm";

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: "hello", status: "new" },
    { id: 2, title: "world", status: "completed" },
    { id: 3, title: "hehehe", status: "completed" },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState(initTodoList);
  const [todoFiltered, setTodoFiltered] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });
  const handleTodoList = (todo, todoId) => {
    //clone current array to the new one
    const newTodoList = [...todoList];
    newTodoList[todoId] = {
      ...newTodoList[todoId],
      status: newTodoList[todoId].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleAllToDo = () => {
    const queryParams = { status: "all" };
    navigate({
      pathname: "",
      search: queryString.stringify(queryParams),
    });
    setTodoFiltered("all");
  };
  const handleNewToDo = () => {
    const queryParams = { status: "new" };
    navigate({
      pathname: "",
      search: queryString.stringify(queryParams),
    });
    setTodoFiltered("new");
  };
  const handleCompletedToDo = () => {
    const queryParams = { status: "completed" };
    navigate({
      pathname: "",
      search: queryString.stringify(queryParams),
    });
    setTodoFiltered("completed");
  };

  const dataFiltered = useMemo(
    () =>
      todoList.filter(
        (todo) => todoFiltered === "all" || todoFiltered === todo.status
      ),
    [todoFiltered, todoList]
  );

  const handleOnSubmit = (value) => {
    console.log("todo Form ", value);
  };
  return (
    <div>
      <h3>To do Form</h3>
      <TodoForm onSubmit={handleOnSubmit} />
      <h3>To Do List</h3>
      <TodoList todoList={dataFiltered} onTodoClick={handleTodoList} />
      <div>
        <button onClick={handleAllToDo}>Show All</button>
        <button onClick={handleNewToDo}>Show New</button>
        <button onClick={handleCompletedToDo}>Show Completed</button>
      </div>
    </div>
  );
}

export default TodoFeature;
