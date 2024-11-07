"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoslice";

export default function Page() {
  const [todo, setTodo] = useState("");
  const todoData = useSelector((state) => state.todosData.todos);
  // console.log('Page TodoData',todoData);
  const dispatch = useDispatch();
  // console.log('Page Todo',todo);
  const todoDispatch = () => {
    dispatch(addTodos(todo));
  };
  return (
    <div className="main">
      <div className="add-user2">
        <div className="add-btn">
          <h1>Add todo</h1>
          <input
            type="text"
            placeholder="Add New todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={() => dispatch(todoDispatch)}>Add Todo</button>
          <div className="link">
            <Link href={"/"}>Go to Home</Link>
            <Link href={"/todolist"}>Go to todo page</Link>
          </div>
          <h1>To do List</h1>
          <div className="list-center">
          {todoData.map((item) => (
            <div key={item.id} className="user-list">
              <span>
                <b>Name:-</b> {item.name}
              </span>
              
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
