import React from 'react';

import { createContext } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';

export const LayoutContext = createContext();


const Layout = () => {

  return (
    
    <div>
      <Header />
      
      <NavBar />


      {/* Content Area */}
      <main className='content'>
        <Outlet/>
      </main>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

export default Layout;

