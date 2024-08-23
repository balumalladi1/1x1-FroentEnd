import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="header">
      <h1>Scheduler App</h1>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </header>
  );
};

export default Header;