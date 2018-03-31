const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true
  },
  ethnicity: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});

mongoose.model('users', userSchema);
