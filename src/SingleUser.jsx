import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { usersData } from "./data";

const SingleUser = () => {
  const { userId } = useParams();
  const location = useLocation();

  const user = usersData.find((u) => u.id == userId);

  console.log("location", location);
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default SingleUser;
