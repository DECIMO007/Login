import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => 
  setUsername(event.target.value);

  const handlePasswordChange = (event) => 
  setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/signup', { username, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Username</label>
            <input type="text" placeholder="Enter Name" name="name"
              className="form-control rounded-0" value={username} onChange={handleNameChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password"
              className="form-control rounded-0" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">Signup</button>
          <Link to="/" className="btn btn-default border w-100 bg-light">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
