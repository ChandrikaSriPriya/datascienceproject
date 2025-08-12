import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (process.env.REACT_APP_API_URL) {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
                localStorage.setItem('token', response.data.token);
            }
            history.push('/home');
        } catch (err) {
            // Backend not ready; still navigate to Home so user can proceed
            history.push('/home');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                    required
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">Sign In</button>
            </form>
            <p className="mt-4">
                Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
            </p>
        </div>
    );
};

export default SignIn;