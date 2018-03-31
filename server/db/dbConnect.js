const mongoose = require('mongoose');

const { mongoURI } = require('./../config');

mongoose.connect(mongoURI, () => {
  console.log('Database is connected');
});
