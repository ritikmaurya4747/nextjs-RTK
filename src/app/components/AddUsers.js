"use client";
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
  };
  return (
    <div className="main">
      <div className="add-user">
        <div className="add-btn">
          <h1>Add User</h1>
          <input
            type="text"
            placeholder="Add New User"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button onClick={userDispatch}>Add User</button>
          <div className="link">
            <Link href={"/removeuser"}>Remove</Link>
            <Link href={"/todolist"}>Go to todo page</Link>
            <Link href={"/apiusers"}>Go to API User page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
