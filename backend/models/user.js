// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['admin', 'user', 'tester'], // Possible roles
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  url: String, // URL field
  credentials: String, // Credentials field
  status: {
    type: String,
    enum: ['Under Review', 'Under Triage', 'Not Reproducible', 'Invalid'], // Status options
    default: 'Under Review'
  },
  tester:{
    type:String,
    ref:tester
  }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
