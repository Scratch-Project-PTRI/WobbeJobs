import React, { StrictMode, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Login from './pages/login-page.jsx';
import Signup from './pages/signup-page.jsx';
import Search from './pages/search-page.jsx';
import EditProfile from './pages/profile-page.jsx';
import './styles/styles.css';
import LandingPage from './pages/LandingPage.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  const [ currentEmail, setCurrentEmail ] = useState('');

  return (
    <div className="">
      <GoogleOAuthProvider clientId='158691301488-8vvlfocfvkhl587aa4fdkf9cvrstev1s.apps.googleusercontent.com'>
        {/* <GoogleOAuthProvider clientId='254528258088-dl9ikiuf975aelj7d07p8ashkbgl7kbs.apps.googleusercontent.com'> */}
          <BrowserRouter>
            <Routes>
              <Route index element={<LandingPage />}></Route>
              <Route path="/login" element={<Login currentEmail={currentEmail} setCurrentEmail={setCurrentEmail}/>}></Route>
              <Route path="/signup" element={<Signup currentEmail={currentEmail} setCurrentEmail={setCurrentEmail}/>}></Route>
              <Route path="/home" element={<Search currentEmail={currentEmail} setCurrentEmail={setCurrentEmail}/>}></Route>
              <Route path="/editprofile" element={<EditProfile currentEmail={currentEmail} setCurrentEmail={setCurrentEmail}/>}></Route>
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
    </div>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
