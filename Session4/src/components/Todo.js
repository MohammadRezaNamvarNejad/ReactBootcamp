import { useState, useEffect, useContext, memo } from "react";
import { UserNameVlue } from "../App";

const Todos = ({ todos }) => {
  // const [count, setCount] = useState(0);
  // const UserName = useContext(UserNameVlue);
  // useEffect(() => {
  //   setCount(todos.length);
  // });

  // return (
  //   <>
  //     <h2>My Todos</h2>
  //     <h2>{UserName.name}</h2>
  //     <h2>{count}</h2>
  //     {todos.map((todo, index) => {
  //       return <p key={index}>{todo}</p>;
  //     })}
  //   </>
  // );
};

export default memo(Todos);
