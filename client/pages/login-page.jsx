import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin, googleLogout } from '@react-oauth/google';

function Login(props) {
  const navigate = useNavigate();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ invalid, setInvalid] = useState(false);

  const auth = async () => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if(response.status === 200) {
        props.setCurrentEmail(email);
        navigate('/home');
      } else {
        setInvalid(true);
      }
    } catch (error) {
      console.log("Error scraping from Authentication:", error);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    auth();
  };

  const handleNewAccount = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
        console.log(codeResponse);
        setUser(codeResponse)
      },
      onError: (error) => console.log('Login Failed:', error)
  });

  // function googleOnClick() {
  //   login();
  // }
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.access_token}`,
      Accept: 'application/json',
     "Cross-Origin-Opener-Policy": 'same-origin',
     "Access-Control-Allow-Origin": 'http://localhost:8080',
    }
  }
  useEffect(() => {
    if (user) {
      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: 'application/json',
        //  "Cross-Origin-Opener-Policy": 'same-origin',
        //  "Access-Control-Allow-Origin": 'http://localhost:8080',
        }
      })
          // .then(res => res.json())
          .then((res) => {
            console.log(res);
            setProfile(res.data);
            console.log(profile.email);
            console.log(profile.name);
          })
          .catch((err) => console.log(err));
    };
    console.log(user);
    console.log(profile);
  }, [user])


  function handlePasswordVisibility() {
    if(document.getElementById('password').getAttribute('type') === 'password') {
      document.getElementById('password').setAttribute('type', 'text');
      document.getElementById('passwordImage').setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210917150049/eyeslash.png')
    } else {
      document.getElementById('password').setAttribute('type', 'password');
      document.getElementById('passwordImage').setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210917145551/eye.png')
    }
  }

  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //     googleLogout();
  //     setProfile(null);
  // };


  // function onSignIn(googleUser) {
    
  //   console.log(googleUser);
  // }

  // function signOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }

  // function handleCredentialResponse(response) {
  //   console.log("Encoded JWT ID token: " + response.credential);
  // }
  // window.onload = function () {
  //   google.accounts.id.initialize({
  //     client_id: "254528258088-dl9ikiuf975aelj7d07p8ashkbgl7kbs.apps.googleusercontent.com",
  //     callback: handleCredentialResponse
  //   });
  //   google.accounts.id.renderButton(
  //     document.getElementById("googleButton"),
  //     { theme: "outline", size: "large" }  // customization attributes
  //   );
  //   google.accounts.id.prompt(); // also display the One Tap dialog
  // }




  return (
 
    <div className="min-h-screen flex justify-center  items-center bg-gradient-to-br from-teal-50 via-cyan-100 to-green-200">
          <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden" />
      
        <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
            <source
                // src='https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4'
                // type="video/mp4"

                src='../assets/AdobeStock_576701363_[fish flurry].mp4' 
                type="video/mp4"
            />
        Your browser does not support the video tag.
        </video>
        
      <div className="max-w-md w-full z-10 bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
          Ready to hunt?
        </h2>
        {invalid ? 
        <div className='flex justify-center mb-4'>
          <h3 className='px-2 py-1 bg-red-200 rounded-xl border border-red-500'>Invalid Credentials. Please try again</h3>
        </div> : 
        null}
        <div className="mb-4">
          <label className="block text-gray-700 ">Username:</label>
          {invalid ? 
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-2 mt-1 block w-full border border-red-400 rounded-md shadow-sm"
              placeholder="Enter your email..."
            /> :
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-2 mt-1 block w-full rounded-md shadow-sm"
              placeholder="Enter your email..."
            />}
          </div>

        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          {invalid ? 
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-2 mt-1 block w-full border border-red-400 rounded-md shadow-sm"
              placeholder="Enter your password"
            /> : 
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-2 mt-1 block w-full rounded-md border shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />}
            <img id='passwordImage' src='https://media.geeksforgeeks.org/wp-content/uploads/20210917145551/eye.png' className='h-5 w-5 inline-block ml-[93%] mt-[-13.75%]' onClick={handlePasswordVisibility}></img>
          {/* <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password"
          /> */}

        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-teal-500 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-teal-300 focus:ring-offset-2"
        >
          Sign In
        </button>

        <div className='w-full mt-2'>
          <button aria-label="Sign in with Google" onClick={login} className="flex w-full justify-center items-center bg-white border border-button-border-light rounded-md p-0.5 pr-3">
            <div className="flex items-center justify-center bg-white w-9 h-9 rounded-l">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                <title>Sign in with Google</title>
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  className="fill-google-logo-blue"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  className="fill-google-logo-green"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  className="fill-google-logo-yellow"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  className="fill-google-logo-red"
                ></path>
              </svg>
            </div>
            <span className="text-sm text-google-text-gray tracking-wider">Sign in with Google</span>
          </button>
        </div>

        {/* <div className='mt-5 flex w-full items-center justify-center'>
          <GoogleLogin/>
        </div> */}
        {/*         
        <div className='flex bg-blue-100 border justify-center'>
          <button className='' onClick={signOut}>Sign Out</button>
        </div> */}

        {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}

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
  )
};

export default Login;
