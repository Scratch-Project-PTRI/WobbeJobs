import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const App = () => {}

const domNode = document.getElementById('rootroot');
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);