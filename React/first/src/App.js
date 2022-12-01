import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [userList, setUserList] = useState([]);

  const addUser = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge ,id: Math.random.toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
