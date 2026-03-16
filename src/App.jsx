import React from 'react';
import { Routes, Route} from 'react-router-dom';

//import components here

// import session provider here

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
}