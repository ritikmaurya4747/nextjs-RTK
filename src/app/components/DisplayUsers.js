'use client'
import { useSelector } from "react-redux";

export default function DisplayUsers() {
  const userData = useSelector((state) =>state.users);
  // console.log(userData);
  
  return (
    <div className="main">
      <div className="show-user">
        <h1>User List</h1>
        {
          userData.map((list)=>(
            <div key={list.id} className="user-list">
              Name : {list.name}
              {list.id}
            </div>
          ))
        }
      </div>
    </div>
  );
}
