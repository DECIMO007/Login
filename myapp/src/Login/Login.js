import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../reduxsaga/authAction';

  function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();
    
    
    const handleNameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      try{
        await props.login(username, password)
        setLoginStatus('success');

      } catch(error){
        setLoginStatus('failure');
      };
    };
    
    if (loginStatus === 'success') {
      navigate('/Home');
    }
  
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              className="form-control rounded-0"
              value={username}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <Link
          to="/Signup"
          className="btn btn-default border w-100 bg-light"
        >
          Create Account
        </Link>
        {loginStatus === 'failure' && (
          <div className="alert alert-danger mt-3" role="alert">
            Login failure.
          </div>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(null, mapDispatchToProps)(Login);
