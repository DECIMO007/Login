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

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(username, password)
      .then(() => {
        setLoginStatus('success');
        navigate('/Home');
      })
      .catch(() => {
        setLoginStatus('failure');
      });
  };

  if (props.user !== undefined) {
    navigate('/Home');
    return null;
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
        {loginStatus === 'success' && (
          <div className="alert alert-success mt-3" role="alert">
            Login successful.
          </div>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.auth !== undefined ? state.auth.user : undefined
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
