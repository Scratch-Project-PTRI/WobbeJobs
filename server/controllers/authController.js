const Auth = require('../models/authModel');
const bcrypt = require('bcryptjs');
const authController = {};

/**
 * createUser - create and save a nAuth into the database.
 */
authController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    console.log('Username and password provided');
    Auth.create({
      username,
      password,
    }).then((data) => {
      console.log(data);
      return next();
    }).catch(err => {
      return next({
        log: 'Express error handler caught error in authController.createUser',
        status: 500,
        message: { err },
      });
    });
  } else {
    return next({ error: 'Username or password was not provided' });
  }
};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
authController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  Auth.find({ username })
    .then((data) => {
      if(!data[0]) next({ error: 'Username was not found'});
      // console.log("Find password: ", data[0].password, "username: ", username);
      const dbPassword = data[0].password;
      res.locals.dbId = data[0]['_id'].toString();
      console.log('dbId: ', res.locals.dbId);
      console.log('password: ', password);
      const match = bcrypt.compare(password, dbPassword).then((data) => {
        console.log('match: ', data);
      });
      if (!match) {
        res.locals.incorrect = true;
      }
      return next();
    }).catch(err => {
      return next({
        log: 'Express error handler caught error in authController.verifyUser',
        status: 500,
        message: { err },
      });
    });
};

module.exports = authController;