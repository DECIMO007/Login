import React from "react";
import "./Home.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    axios
      .post("http://localhost:3001/api/logout")
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    navigate('/');
    return null;
  }

  return (
    <div className="Home-container">
      <div className="Home-content">
        WORLDWIDE WEBSITE
        </div>
        <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
}

export default Home;