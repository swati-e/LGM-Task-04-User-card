import React from 'react';
import './UserCard.css';

function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.user.avatar} alt={props.user.first_name} />
      <h2>{props.user.first_name} {props.user.last_name}</h2>
      <p>{props.user.email}</p>
    </div>
  );
}

export default UserCard;
