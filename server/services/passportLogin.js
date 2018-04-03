const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

// User instance from database
const User = require('mongoose').model('users');

// Login options
const loginOptions = { usernameField: 'email', passwordField: 'password' };

// Local login strategy defined
const localLogin = new localStrategy(
  loginOptions,
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        done(null, false);
      } else {
        user
          .checkPassword(password)
          .then(() => {
            done(null, user);
          })
          .catch(e => {
            done(null, false);
          });
      }
    } catch (e) {
      done(e);
    }
  }
);

// Serialize and Deserialize user to maintain sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use('local-login', localLogin);
