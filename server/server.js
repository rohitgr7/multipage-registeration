const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

// Database initialized
require('./db/dbConnect');
require('./models/user');

// Local imports
const authRouter = require('./routes/auth');
const { sessionSecret } = require('./config');

// App initialized
const app = express();

// Middlewares for optimization
app.use(compression());
app.use(helmet());

// Body-parser middleware for post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session initialized
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: sessionSecret,
    cookie: {
      maxAge: 10 * 24 * 60 * 60 * 1000
    }
  })
);

// Passport session and initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRouter);

// Production client-side setup
if (process.env.production === 'production') {
  const publicPath = path.join(__dirname, '..', 'client', 'build');
  app.use(express.static(publicPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
