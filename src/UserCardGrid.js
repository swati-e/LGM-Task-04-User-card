import React from 'react';
import UserCard from './UserCard';
import './UserCardGrid.css';

function UserCardGrid(props) {
  return (
    <div className="user-card-grid">
      {props.users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserCardGrid;
