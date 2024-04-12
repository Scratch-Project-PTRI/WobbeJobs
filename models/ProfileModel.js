const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profile = new Schema ({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  location : {
    type : String,
    required : true
  },
  resume : {
    type : Object,
    required : false
  },
})

module.exports = mongoose.model ('ProfileModel', profile);
