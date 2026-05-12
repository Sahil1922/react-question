import React from "react";
import './UserCard.css';

function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
      <p>
        <strong>Address:</strong> {props.address}
      </p>
    </div>
  );
}

export default UserCard;