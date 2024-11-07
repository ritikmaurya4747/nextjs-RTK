"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function Page() {
  const userData = useSelector((state) => state.userData.users);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Remove User Page</h1>
      <div className="list-center">
        {userData.map((list) => (
          <div key={list.id} className="user-list">
            <span>
              <b>Name:-</b> {list.name}
            </span>
            <button onClick={() => dispatch(removeUser(list.id))}>
              Remove
            </button>
            <Link href={"/"}>Home</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
