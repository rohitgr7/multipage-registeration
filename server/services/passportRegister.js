const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const _ = require('lodash');

// User instance from database
const User = require('mongoose').model('users');

// Registeration options
const registerOptions = {
  usernameField: 'email',
  passReqToCallback: true
};

// Local registeration strategy defined
const localRegisteration = new localStrategy(
  registerOptions,
  async (req, email, password, done) => {
    try {
      if (!email || !password) {
        done(null, false);
      }

      const user = await User.findOne({ email });

      if (user) {
        done(null, false);
      } else {
        const body = _.pick(req.body, [
          'name',
          'description',
          'state',
          'age',
          'ethnicity',
          'race',
          'sex',
          'height',
          'weight'
        ]);
        body.email = email;
        body.password = password;

        const newUser = await new User(body).save();
        done(null, newUser);
      }
    } catch (e) {
      done(e);
    }
  }
);

passport.use('local-register', localRegisteration);
