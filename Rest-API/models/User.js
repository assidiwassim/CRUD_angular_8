
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var timestamps = require('mongoose-timestamp');


let UserShema = new Schema({
  email: {type: String},
  password: {type: String},
});

UserShema.plugin(timestamps,{
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});


module.exports = mongoose.model('users', UserShema);