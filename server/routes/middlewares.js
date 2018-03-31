const passport = require('passport');

module.exports = {
  localLogin: passport.authenticate('local-login', { session: true }),
  localRegisteration: passport.authenticate('local-register'),
  ensureAuthentication: (req, res, next) => {
    if (user.isAuthenticated) {
      next();
    } else {
      res.status(401).send({ error: 'User not logged in!' });
    }
  }
};
