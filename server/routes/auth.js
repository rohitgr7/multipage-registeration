const router = require('express').Router();

// Passport imports
require('./../services/passportLogin');
require('./../services/passportRegister');

// Middleware imports
const {
  localLogin,
  localRegisteration,
  ensureAuthentication
} = require('./middlewares');

// User instance from the database
const User = require('mongoose').model('users');

// Post register route handler
router.post('/register', localRegisteration, (req, res) => {
  res.send({ success: 'user created' });
});

// Post login route handler
router.post('/login', localLogin, (req, res) => {
  res.send(req.user);
});

// Get logout route handler
router.get('/logout', ensureAuthentication, (req, res) => {
  req.logout();
  res.redirect('/');
});

// Get user route handler
router.get('/user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
