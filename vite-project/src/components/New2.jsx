// import {useState} from 'react'
// function New2(){    
//     let [counter,updateCounter]=useState(100)
//     return(
//         <div>
//         <h2>Counter variable value is: {counter}</h2>       
// <button onClick={()=>updateCounter(++counter)}>Increment</button>
// <button onClick={()=>updateCounter(--counter)}>Decrement</button>
//         </div>
//     )

// import {useState} from 'react'
// function New2(){
//     let [name,updateName]=useState("gy")
//     return(
//         <div>
//         <h2>name of student is: {name}</h2>
//         <button onClick={()=>updateName("gongyoo")}>change name</button>
//         </div>
//     )
// }

// export default New2

import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValidUser, setIsValidUser] = useState(false);

  // Mock valid usernames
  const validUsernames = ['admin', 'user123', 'testuser'];

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (isValidUser) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username. Please try again.');
    }
  };

  // useEffect to validate username whenever it changes
  useEffect(() => {
    if (username) {
      setIsValidUser(validUsernames.includes(username));
    } else {
      setIsValidUser(false);
    }
  }, [username]);

  return (
    <div style={{ margin: '50px', fontFamily: 'Arial' }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Username: 
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Password: 
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      {message && (
        <p style={{ marginTop: '20px', color: isValidUser ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default LoginPage;

