const mongoose = require('mongoose')
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  fullname: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50,
  },
  username: {
      type: String,
      required: [true, 'please provide a username'],
      maxlength: [9, 'should not be more than 9 character long'],
      minlength:[4, 'should not be less than 4 '],
      trim: true,
      unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',  
  },
},
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,   
  },
  role: {
    type: String,
    enum: ['superAdmin','admin', 'user'],
    default: 'user',
  },

}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)