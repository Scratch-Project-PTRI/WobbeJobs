import React, { StrictMode, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Login from './pages/login-page.jsx';
import Signup from './pages/signup-page.jsx';
import Search from './pages/search-page.jsx';
import EditProfile from './pages/profile-page.jsx';
import './styles.css';
import LandingPage from './pages/landing-page.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <div className="">
        <GoogleOAuthProvider clientId='254528258088-dl9ikiuf975aelj7d07p8ashkbgl7kbs.apps.googleusercontent.com'>
          <BrowserRouter>
            <Routes>
              <Route index element={<LandingPage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/home" element={<Search />}></Route>
              <Route path="/editprofile" element={<EditProfile />}></Route>
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
