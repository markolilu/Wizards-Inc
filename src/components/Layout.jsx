import { createContext } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';

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

