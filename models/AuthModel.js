const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auth = new Schema ({
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
})

module.exportd = mongoose.model ('AuthModel', auth);