const passport = require('passport');

module.exports = {
  // Login middleware
  localLogin: passport.authenticate('local-login', { session: true }),

  // Registeration middleware
  localRegisteration: passport.authenticate('local-register'),

  // Check for authentication middleware
  ensureAuthentication: (req, res, next) => {
    if (req.isAuthenticated) {
      next();
    } else {
      res.status(401).send({ error: 'User not logged in!' });
    }
  }
};
