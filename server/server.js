const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// const mongoose = require('mongoose');

// mongoose.connect('connect string goes here');

// mongoose.connection.once('open', () => {
//   console.log('MONGO DB ---> Connected');
// });

// mongoose.connection.on('open', () => {
//   console.log('BROKE IT ---> MongDB is not working');
// });

app.use(express.json());
app.use(express.static(path.join(__dirname, './../client')));

app.get('/', (req, res) => {
  console.log('inside GET route');
  return res.status(200).json('GET inside the root endpoint ');
});

app.get('/login', (req, res) => {
  console.log('inside LOGIN route');
  return res.status(200).json('Response from login');
});

app.get('/signup', (req, res) => {
  console.log('inside SIGNUP route');
  return res.status(200).json('Response from signup');
});

app.get('/home', (req, res) => {
  console.log('inside HOME route');
  return res.status(200).json('Response from home');
});

app.get('/editprofile', (req, res) => {
  console.log('inside EDIT PROFILE route');
  return res.status(200).json('Response from edit profile');
});

// Default middleware error
app.use((req, res, next) => {
  const error = new Error('Middleware Error - Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: { message: err.message } });
});

app.listen(PORT, () => {
  console.log(`Look at this --> Server is running @ ${PORT}`);
});
