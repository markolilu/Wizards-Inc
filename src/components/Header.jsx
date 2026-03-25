import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSession } from '../contexts/SessionContext';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const { user } = useSession();

  const handleLogout = () => {
    localStorage.removeItem('token');
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
      <div ><img className="logo" src="/src/assets/logo2v2.png" alt="Sow & Tell Logo"/></div>
      <nav>
        <div className="header-login">
       
        {token ? (
          <>
            <Link className="header-login" to="/profile">{/*wordCase(user.username)*/}Your Profile</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="header-login" to="/login">Login</Link>
            <Link className="header-login" to="/login">Signup</Link>
          </>
        )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
