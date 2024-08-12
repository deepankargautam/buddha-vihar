// src/components/Admin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy authentication
        if (username === 'admin' && password === 'password') {
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div style={styles.inputGroup}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        padding: '10px',
        width: '200px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
    },
};

export default Admin;
