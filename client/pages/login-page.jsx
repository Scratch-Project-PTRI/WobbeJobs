import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleNewAccount = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex justify-center  items-center bg-gradient-to-br from-teal-50 via-cyan-100 to-green-200">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Welcome Back!
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 ">Username:</label>
          <input
            type="email"
            id="email"
            name="username"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            placeholder="Enter your email..."
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-teal-500 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-teal-300 focus:ring-offset-2"
        >
          Sign In
        </button>
        <footer id="login-footer" className="text-center text-gray-700 mt-4">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-teal-500 hover:underline"
            onClick={handleNewAccount}
          >
            Sign up
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Login;
