import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3001/login', { name, password });
    if (response.data.status === 'success') {
      setLoginStatus('success');
    } else {
      setLoginStatus('failure');
    }
  }

  if (loginStatus === 'success') {
    window.location.href = '/Home';
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'>Username</label>
                    <input type='text' placeholder='Enter Name' name='name'
                      className='form-control rounded-0' value={name} onChange={handleNameChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password' name='password'
                      className='form-control rounded-0' value={password} onChange={handlePasswordChange} />
                 </div>
                 <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
            </form>
            <button className='btn btn-default border w-100 bg-light'>Create Account</button>
            {loginStatus === 'failure' && (
          <div className='alert alert-danger mt-3' role='alert'>
            Login failure.
          </div>
        )}
        </div>
    </div>
  );
}

export default Login;
