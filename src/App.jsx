import React from 'react';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SessionProvider } from './contexts/SessionContext';

//import components here
import Layout from './components/Layout';

import Home from './pages/home';
import LogInRegistration from './pages/login';
import Profile from './pages/profile';
import AboutPage from './pages/about';


const App = () => {

    return (
        <Router>
            <SessionProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home isAuthenticated={Boolean(localStorage.getItem('token'))} />} />
                        <Route path="login" element={<LogInRegistration isAuthenticated={Boolean(localStorage.getItem('token'))} />} /> 
                        <Route path="profile" element={<Profile isAuthenticated={Boolean(localStorage.getItem('token'))} />} /> 
                        <Route path="about" element={<AboutPage isAuthenticated={Boolean(localStorage.getItem('token'))} />} /> 
                    </Route>
                </Routes>
            </SessionProvider>
        </Router>
    )
};

export default App;