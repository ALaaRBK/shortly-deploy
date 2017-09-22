var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose')

  var username= mongoose.Schema({
    
    username : {type : string, index{unique :true }}, 
    user.string('password', 100);

  })
var User = mongoose.module('User',userSchema);

User.comparePassword.prototype = function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      if (err) { 
        callback(err)
      }else{
      callback(null,isMatch);
    }
    })
  };


userSchema.pre('save',function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.password, null, null).bind(this)
      .then(function(hash) {
        this.password =  hash;
        next();
      });
    })



module.exports = User;


