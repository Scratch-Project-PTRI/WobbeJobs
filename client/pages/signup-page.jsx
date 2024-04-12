import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const handleHaveAccount = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    // <div>
    //   <span className="login-container">
    //     <label>Username:</label>
    //     <input type="email" id="email" name="username" />
    //     <br />

    //     <label className="password-login">Password:</label>
    //     <input type="password" id="password" name="password" />
    //     <button onClick={handleSignup}>Signup</button>
    //   </span>

    //   <footer id="login-footer">
    //     Already have an account?{' '}
    //     <input type="checkbox" onClick={handleHaveAccount} />
    //   </footer>
    // </div>

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Sign Up
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
