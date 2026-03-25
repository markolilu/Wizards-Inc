import React from 'react';

import { useState } from 'react';

import api from '../api';

import { useNavigate } from 'react-router-dom';

import { useSession } from '../contexts/SessionContext'; 

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

    const {setUser } = useSession();

    const[errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("email: ", email, "password: ", password);
            const response = await api.post('/api/users/login', {email: email, password: password})
            const data = response.data;
            console.log(data);

            setUser({
                username: data.user.username,
                id: data.user.id
            })

            localStorage.setItem('token', data.token);
            localStorage.setItem('currentUserId', data.user.id);
            navigate('/');
        } catch (error) {
            console.error('Login failed 2', error.response)
            const backEndError = error.response?.data?.message
            if (backEndError !== null) {
                setErrorMsg(backEndError)
            }
        }
    };

    return (
        <div className="center-div">
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input 
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <div className="center">
            <button type="submit">Login</button>
            </div>
        </form>
        </div>
    );
};

export default Login;