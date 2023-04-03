import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => 
  setUsername(event.target.value);
  const handlePasswordChange = (event) => 
  setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/login', { username, password })
      .then((response) => {
        console.log('response', response)
        if (response.data.status === true) {
          localStorage.setItem('isLoggedIn', true);
          setLoginStatus('success');
          navigate('/Home');
        } else {
          setLoginStatus('failure');
        }
      })
      .catch((error) => {
        console.log(error);
        setLoginStatus('failure');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Username</label>
            <input type="text" placeholder="Enter Name" name="name"
              className="form-control rounded-0" value={ username } onChange={handleNameChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password"
              className="form-control rounded-0" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
        </form>
        <Link to="/Signup" className="btn btn-default border w-100 bg-light">Create Account</Link>
        {loginStatus === 'failure' && (
          <div className="alert alert-danger mt-3" role="alert">
            Login failure.
          </div>
        )}
         {loginStatus === 'success' && (
          <div className="alert alert-success mt-3" role="alert">
            Login successful.
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
