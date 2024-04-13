import React, { StrictMode, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Login from './pages/login-page.jsx';
import Signup from './pages/signup-page.jsx';
import Search from './pages/search-page.jsx';
import EditProfile from './pages/profile-page.jsx';
import './styles.css';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Search />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
