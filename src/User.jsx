import { Link } from "react-router-dom";

const User = ({ id, name }) => {
  const path = `${id}`;
  return (
    <div>
      <span>{name}</span>
      <Link to={path}>Go to user</Link>
    </div>
  );
};

export default User;
