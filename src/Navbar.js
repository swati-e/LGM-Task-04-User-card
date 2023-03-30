import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar">
      <h1>Maracuya Magic</h1>
      <button onClick={props.getUsers}>Get Users</button>
    </nav>
  );
}

export default Navbar;
