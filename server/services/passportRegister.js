const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('mongoose').model('users');

const registerOptions = {
  usernameField: 'email',
  passReqToCallback: true
};

const localRegisteration = new localStrategy(
  registerOptions,
  (req, email, password, done) => {
    console.log(req.body);
    done(null, req.user);
  }
);

passport.use('local-register', localRegisteration);
