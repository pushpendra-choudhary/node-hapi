'use strict';

let mongoose = require('mongoose');
let timestamps = require('mongoose-timestamp');
let schema = mongoose.Schema;

let userSchema = schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        unique:true,
        required: 'Please enter your email',
        trim: true,
        lowercase:true
      },
      password: {
        type: String,
        required: true
      }
});

userSchema.plugin(timestamps);

module.exports = mongoose.model('User', userSchema);