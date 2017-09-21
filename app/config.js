

var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/2017-09-shortly-deploy')


db.on('error', console.error.bind(console,'connection error'))

db.once('open', function(){
  console.log('connection open')
})



module.exports = db;
