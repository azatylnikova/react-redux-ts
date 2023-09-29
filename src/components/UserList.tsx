import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action-creators/user";
import { UserAction } from "../hooks/useAction";

export const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector(state => state.user);

  const { fetchUsers } = UserAction();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка!</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.key}>{user.name}</div>
      ))}
    </div>
  );
};
