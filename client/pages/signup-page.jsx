import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    console.log('in handle')
    fetch('/signup', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      }, 
      body : JSON.stringify({
        email,
        password
      })
    })
    .then(response => {
      if (response.ok){
        navigate('/home');
        // console.log(response);
      }
    });

    
  };

  const handleHaveAccount = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div className="min-h-screen flex justify-center  items-center bg-gradient-to-br from-teal-50 via-cyan-100 to-green-200">
    <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Need a new account? You've come to the right place!
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 ">Username:</label>
        <input
          type="email"
          id="email"
          name="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your password"
        />
      </div>
      <button
        onClick={handleSignup}
        className="w-full bg-teal-500 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-teal-300 focus:ring-offset-2"
      >
        Create New Account
      </button>
      <footer id="login-footer" className="text-center text-gray-700 mt-4">
        Already have an account?{' '}
        <a
          href="#"
          className="text-teal-500 hover:underline"
          onClick={()=> navigate('/login')}
        >
          Sign in to existing account
        </a>
      </footer>
    </div>
  </div>

  );
}

export default Signup;

// render failure message if signup unsuccesful ('accoutn already exists' or 'sign error, please refresh page and try again')

// Change handleSignup function to navigate to search page instead of login page if signup successful