import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../reduxsaga/authAction';

function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isLoggedIn !== undefined && !props.isLoggedIn) {
      navigate('/');
    }
  }, [props.isLoggedIn, navigate]);

  const handleLogout = () => {
    props.logout()
     try{
        navigate('/');
      }catch(error){
        console.log(error);
      };
  };

  return (
    <div className="Home-container">
      <div className="Home-content">
        WORLDWIDE WEBSITE
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth ? state.auth.isLoggedIn : undefined
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);