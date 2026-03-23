import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSession } from '../contexts/SessionContext';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const { user } = useSession();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };


  const wordCase = (word) => {  
    if (word === undefined) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <header>
      <div className="logo"><img src="/src/assets/logo2.png" alt='Sow & Tell Logo'/></div>
      <nav>
        <Link to="/">All Posts</Link>
        {token ? (
          <>
            <Link to="/profile">{wordCase(user.username)}'s Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
