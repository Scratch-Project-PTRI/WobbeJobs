const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const authController = require('./controllers/authController');
const searchController = require('./controllers/searchController');
const indeedController = require('./controllers/indeedController');
const shuffleController = require('./controllers/shuffleController');

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://wilson7chen:codesmith@scratch.67upbfi.mongodb.net/?retryWrites=true&w=majority&appName=Scratch'
);

mongoose.connection.once('open', () => {
  console.log('MONGO DB ---> Connected');
});

// mongoose.connection.on('open', () => {
//   console.log('BROKE IT ---> MongDB is not working');
// });

app.use(express.json());
app.use(express.static(path.join(__dirname, './../client')));

// app.get('/', (req, res) => {
//   // console.log('inside GET route');
//   return res.status(200).json('GET inside the root endpoint ');
// });

// app.get('/login', (req, res) => {
//   // console.log('inside LOGIN route');
//   return res.status(200).json('Response from login');
// });

app.post('/login', authController.verifyUser, (req, res) => {
  if (res.locals.incorrect) {
    return res.status(401).json('Incorrect credentials');
  } else {
    return res.status(200).json(res.locals.user);
  }
});

// app.get('/signup', (req, res) => {
//   // console.log('inside SIGNUP route');
//   return res.status(200).json('Response from signup');
// });

app.post('/signup', authController.createUser, (req, res) => {
  // console.log("res" + res)

  // return res.status(200).sendFile(path.join(__dirname, '/search-page'));
  return res.status(200).json('');
});

// app.get('/home', (req, res) => {
//   console.log('inside HOME route');
  // return res.status(200).sendFile(path.join(__dirname, '../client/app.js'));
// });

app.post(
  '/search',
  searchController.searchZipRecruiter,
  indeedController.searchIndeed,
  shuffleController.shuffleResults,
  (req, res) => {
    console.log(
      'inside ANON SEARCH route--->',
      res.locals.zipResults[0],
      res.locals.indeedResults[0]
    );

    return res.status(200).send(res.locals.finalResults);
  }
);

// app.get('/editprofile', (req, res) => {
//   console.log('inside EDIT PROFILE route');
//   return res.status(200).sendFile(path.join(__dirname, '/profile-page'));
// });

app.use((req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../build/index.html"), (err) => {
      if (err) {
          console.log(err);
          return res.status(500).send("An error occurred");
      }
});
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// Default middleware error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Look at this --> Server is running @ ${PORT}`);
});
