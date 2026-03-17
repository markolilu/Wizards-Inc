import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//import components here

// import session provider here
import { SessionProvider } from './contexts/SessionContext';


const App = () => {
    return (
        <div>
            <SessionProvider>
                <Header />
                <Routes>
                    {/* IMPORT <Route path='' element={<Name_Of_Component />} */}
                </Routes>
                <Footer />
            </SessionProvider>
        </div>
    )
};

export default App;