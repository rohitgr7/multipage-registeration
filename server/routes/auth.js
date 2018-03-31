const router = require('express').Router();

const User = require('mongoose').model('users');

router.get('/', (req, res) => {
  res.send('Done');
});

router.post('/register', (req, res) => {
  console.log(req.body);
});

router.post('/login', (req, res) => {
  if (!req.user) {
    res.send(user);
  } else {
    res.status(401).send({ error: 'Invalid email or password' });
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
