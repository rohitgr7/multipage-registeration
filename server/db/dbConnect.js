const mongoose = require('mongoose');

const { mongoURI } = require('./../config');

// Mongoose promise initialized
mongoose.Promise = global.Promise;

// Database connection
mongoose.connect(mongoURI, () => {
  console.log('Database is connected');
});
