import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, setUser } from '../reduxsaga/authAction';

function HomePage(props) {
  const { setUser, logout } = props;
  const navigate = useNavigate();

  useEffect(() => {
// Call checkSession() action creator when component mounts
    setUser();
  }, [setUser]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Welcome to Browser</h1>
        <button
          type="button"
          className="btn btn-danger w-100 rounded-0"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state?.auth?.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: () => dispatch(setUser()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);