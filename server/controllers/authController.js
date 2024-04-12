const Auth = require('../../models/AuthModel');
const bcrypt = require('bcryptjs');
const authController = {};

/**
 * createUser - create and save a nAuth into the database.
 */
authController.createUser = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    console.log('Email and password provided');
    Auth.create({
      email,
      password,
    }).then((data) => {
      console.log(data);
      res.locals.user = data;
      return next();
    }).catch(err => {
      return next({
        log: 'Express error handler caught error in authController.createUser',
        status: 500,
        message: { err },
      });
    });
  } else {
    return next({ error: 'Email or password was not provided' });
  }
};

/**
 * verifyUser - Obtain email and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
authController.verifyUser = (req, res, next) => {
  const { email, password } = req.body;
  Auth.find({ email })
    .then((data) => {
      console.log(data);
      if(!data[0]) {
        next({ error: 'Email was not found'});
      }
      // console.log("Find password: ", data[0].password, "email: ", email);
      const dbPassword = data[0].password;
      console.log(dbPassword);
      res.locals.dbId = data[0]['_id'].toString();
      console.log('dbId: ', res.locals.dbId);
      console.log('password: ', password);
      const match = bcrypt.compare(password, dbPassword).then((didMatch) => {
        // console.log('match: ', didMatch);
        if (!didMatch) {
          res.locals.incorrect = true;
        } else {
          res.locals.user = data;
        }
        return next();
      });
    }).catch(err => {
      return next({
        log: 'Express error handler caught error in authController.verifyUser',
        status: 500,
        message: { err },
      });
    });
};

module.exports = authController;