"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";

export default function Page() {
  const apiUserData = useSelector((data) => data.userData.userAPIData);
  // console.log("API",apiUserData.userData.userAPIData);

  const dispatch = useDispatch();
  return (
    <div className="add-btn">
      <h1>User List from API</h1>
      <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button>
      {
        apiUserData &&
        apiUserData.map((user) => (
          <div key={user.id}>
            <span>
              <b>Name:-</b> {user.name}
            </span><br />
            <span>
              <b>Email:-</b> {user.email}
            </span>
          </div>
        )) ||
        "Loading..."
      }
    </div>
  );
}
