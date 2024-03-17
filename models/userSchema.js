const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
    minlength: 12,
    maxlength: 12,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  role: {
    type: String,
    required: true,
    enum: ['Doner', 'Organization', 'Admin'],
    default: 'Doner',
  },
  address: {
    type: String,
  },
  pincode: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    onUpdate: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
