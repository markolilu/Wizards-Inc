import React from 'react';

import login from '../components/Login';
import register from '../components/Register';

const LogInRegistration = () => {
    return (
        <>
            <div>
                <login />
            </div>
            <div>
                <register />
            </div>
        </>
    )
}

export default LogInRegistration;