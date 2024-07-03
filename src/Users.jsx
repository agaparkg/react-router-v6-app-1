import React from "react";
import { usersData } from "./data";
import User from "./User";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {usersData.map((user) => {
          return (
            <li key={user.id}>
              <User {...user} />
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Users;
