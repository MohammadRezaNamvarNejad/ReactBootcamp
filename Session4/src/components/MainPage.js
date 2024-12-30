import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todo";

export const MainPage = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((lastCount) => lastCount + 1);
  };
  const decrement = () => {
    setCount((lastCount) => lastCount - 1);
  };

  const HandleTodoList = (e) => {
    setTodos([...todos, e.target.value]);
  };
  return (
    <>
      <Todos todos={todos} />
      <hr />
      <input type="text" onChange={(e) => HandleTodoList(e)} />
      <button onClick={decrement}>+</button>
      <div style={{ color: "red" }}>
        <button onClick={decrement}>+</button>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
