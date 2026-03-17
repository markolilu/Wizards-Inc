import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react';

//import components here
import Navbar from './components/NavBar';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Account from './pages/account';
import Footer from './components/Footer';

import { SessionProvider } from './contexts/SessionContext';


const App = () => {
    const [selectedPage, setSelectedPage] = useState('home');

    return (
        <Router>
            <SessionProvider>
                <Header />
                <Navbar selectedPage={selectedPage} onSetPage={setSelectedPage} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
                <Footer />
            </SessionProvider>
        </Router>
    )
};

export default App;