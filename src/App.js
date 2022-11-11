import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [UsersList, setUsersList] = useState([]);

  const getUserListHandler = (uName, uAge) => {
    setUsersList((prev) => {
      return [
        ...prev,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser getUsers={getUserListHandler} />
      <UserList users={UsersList} />
    </div>
  );
}

export default App;
