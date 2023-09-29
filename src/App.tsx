import React from "react";
import { UserList } from "./components/UserList";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
};
