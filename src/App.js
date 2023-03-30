import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UserCardGrid from './UserCardGrid';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar getUsers={getUsers} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserCardGrid users={users} />
      )}
    </div>
  );
}

export default App;
