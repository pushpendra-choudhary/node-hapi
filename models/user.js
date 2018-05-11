'use strict';

let mongoose = require('mongoose');
let timestamps = require('mongoose-timestamp');
let schema = mongoose.Schema;

let userSchema = schema({
    first_name: String,
    last_name: String,
    designation: String,
    employee_id: String
});

userSchema.plugin(timestamps);

module.exports = mongoose.model('User', userSchema);