const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('mongoose').model('users');

const loginOptions = { usernameField: 'email', passwordField: 'password' };

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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne(id).then(user => {
    done(null, user);
  });
});

passport.use('local-login', localLogin);
