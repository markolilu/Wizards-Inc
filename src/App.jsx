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
                        <Route index element={<Home />} />
                        <Route path="login" element={<LogInRegistration />} /> {/* path = login : auto becomes /login in the url*/}
                        <Route path="profile" element={<Profile />} /> {/* path = profile : auto becomes /profile in the url*/}
                        <Route path="about" element={<AboutPage />} /> {/* path = about : auto becomes /about in the url*/}
                    </Route>
                </Routes>
            </SessionProvider>
        </Router>
    )
};

export default App;