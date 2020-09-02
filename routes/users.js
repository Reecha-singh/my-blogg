var mongoose = require('mongoose');
var plm = require('passport-local-mongoose')

mongoose.connect('mongodb://localhost/blogapp');

var userSchema = mongoose.Schema({
  name:String,
  username: String,
  password:String,
  email:String
})

userSchema.plugin(plm);

module.exports = mongoose.model('user',userSchema);