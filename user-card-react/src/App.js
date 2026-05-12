//go into user-card-react
//npm i
//npm start

import React from "react";
import UserCard from "./components/UserCard"
import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Name1",
      email: "a@gmail.com",
      address: "Hyderabad"
    },
    {
      id: 2,
      name: "Name2",
      email: "b@gmail.com",
      address: "Delhi"
    },
    {
      id: 3,
      name: "Name3",
      email: "c @gmail.com",
      address: "Mumbai"
    }
  ];

  return (
    <div className="container">
      <h1>User Profile Cards</h1>

      <div className="card-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
