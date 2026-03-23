import React from 'react';

import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const{ setUser } = useSession();
    const[error, setError] = useState('');

    const navigate = useNavigate();

    const displayError = (message) => {
        setError(message);
        setTimeout(() => {
            setError('');
        }, 3000);
    };
    

    const validatePassword = () => {
        if (password !== password2) {
            displayError('Passwords do not match');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePassword) {
            return;
        }

        try {
            const response = await api.post('/api/users', {email: email, userName: userName, firstName: firstName, lastName: lastName, password: password, password2: password2 });
            const data = response.data;

            setUser({
                username: data.user.userName,
                id: data.user.id
            });

            navigate('/');
        } catch (error) {
            console.error('Registration failed', error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input 
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="user name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
            />
            {error && <p>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;