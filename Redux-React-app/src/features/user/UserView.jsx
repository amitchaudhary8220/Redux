import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useSelector((state) => state.user);
  console.log("user is ", user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h1>List users</h1>
      {user.loading && <h3>loading...</h3>}
      {!user.loading && user.error !== "" && <h3>{user.error}</h3>}
      {!user.loading && user.users.length > 0 ? (
        <ul>
          {" "}
          {user.users.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
