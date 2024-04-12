import React from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home");
    }

    const handleNewAccount = (e) => {
        e.preventDefault();
        navigate("/signup")
    }

    return (
        <div className="login-page">
            <span className="login-container">
                <label>Username:</label>
                <input type="email" id="email" name="username" />
                <br />

                <label className="password-login">Password:</label>
                <input type="password" id="password" name="password" />
                <button onClick={handleLogin}>Login</button>
            </span>

            <footer id="login-footer">
                Don't have an account?<input type="checkbox" onClick={handleNewAccount}/><br/>
            </footer>
        </div>
    );
}

export default Login;
