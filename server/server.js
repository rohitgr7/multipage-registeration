const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

require('./db/dbConnect');
require('./models/user');
const authRouter = require('./routes/auth');
const { sessionSecret } = require('./config');

const app = express();

app.use(compression());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
