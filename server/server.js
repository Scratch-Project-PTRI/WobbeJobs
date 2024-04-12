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

app.listen(PORT, () => {
  console.log(`Look at this --> Server is running @ ${PORT}`);
});
