import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const pages = [
    {name: 'Home', path: '/'},
    {name: 'Login', path: '/login'},
    {name: 'About', path: '/about'},
    {name: 'Profile', path: '/profile'}
]

const Navbar = () => {
    const location = useLocation();

    const renderPageLinks = () => {
        return pages.map(page => {
            const isActive = page.path === '/'
                 ? location.pathname === '/'
                 : location.pathname.startsWith(page.path);
       
            return (
                <li
                    key={page.path}
                    style={{
                        backgroundColor: isActive ? '#97b648' : 'transparent',
                    }}
                >
                <Link
                    to={page.path}
                    onClick={() => console.log('Navigated to: ' + page.path)}
                >
                    {page.name}
                </Link>
                    
                </li>
            );
        });
    };


    return (
        <div>
            <aside>

                <ul>
                    {renderPageLinks()}
                </ul>
            </aside>
        </div>
    );
};


export default Navbar;