import React from "react";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    const handleHaveAccount = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return (
        <div>
             <span className="login-container">
                <label>Username:</label>
                <input type="email" id="email" name="username" />
                <br />

                <label className="password-login">Password:</label>
                <input type="password" id="password" name="password" />
                <button onClick={handleSignup}>Signup</button>
            </span>

            <footer id="login-footer">
                Already have an account? <input type="checkbox" onClick={handleHaveAccount}/>
            </footer>
        </div>
    )
};

export default Signup;