import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signin.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            } 
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99]
            } 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            if (process.env.REACT_APP_API_URL) {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
                localStorage.setItem('token', response.data.token);
            }
            history.push('/home');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
            setTimeout(() => {
                history.push('/home');
            }, 1500);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-background">
                <div className="gradient-circle blue"></div>
                <div className="gradient-circle teal"></div>
                <div className="gradient-circle purple"></div>
            </div>
            
            <motion.div 
                className="signin-card"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="signin-header">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="signin-icon">
                        <circle cx="12" cy="12" r="10" stroke="#6366f1" strokeWidth="2" />
                        <path d="M12 16V12M12 8H12.01" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <h1>Welcome Back</h1>
                    <p>Sign in to continue your data science journey</p>
                </motion.div>

                {error && (
                    <motion.div 
                        variants={itemVariants}
                        className="error-message"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="signin-form">
                    <motion.div variants={itemVariants} className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="forgot-password">
                        <a href="/forgot-password">Forgot password?</a>
                    </motion.div>

                    <motion.button 
                        variants={itemVariants}
                        type="submit" 
                        className="signin-button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="loading-spinner"></span>
                        ) : (
                            'Sign In'
                        )}
                    </motion.button>
                </form>

                <motion.div variants={itemVariants} className="signin-footer">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    <div className="divider">or</div>
                    <button className="social-button google">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Continue with Google
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SignIn;