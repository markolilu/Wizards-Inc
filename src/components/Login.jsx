import React from 'react';

import { useState } from 'react';
// import api from '../api'; // doesnt exist yet
import { useNavigate } from 'react-router-dom';

import { useSession } from '../contexts/SessionContext'; 

const Login = () => {
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

    const {setUser } = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/users/login', {email: email, password: password})
            const data = response.data;

            setUser({
                username: data.user.username,
                id: data.user.id
            })

            localStorage.setItem('authToken', data.token);
            navigate('/');
        } catch (error) {
            console.error('Login Failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input 
                type="text"
                placeholder="user name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;