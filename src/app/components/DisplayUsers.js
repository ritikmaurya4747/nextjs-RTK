"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";
export default function DisplayUsers() {
  const userData = useSelector((state) => state.userData.users);
  // console.log("Data", userData);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="show-user">
        <h1>User List</h1>
        <div className="list-center">
          {userData.map((list) => (
            <div key={list.id} className="user-list">
              <span>
                <b>Name:-</b> {list.name}
              </span>
              <button onClick={() => dispatch(removeUser(list.id))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
