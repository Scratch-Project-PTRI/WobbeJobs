const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const searchHistory = new Schema ({
  email : {
    type : String,
    required : true
  },
  searchDate : {
    type : String,
    required : true
  },
  jobTitle : {
    type : String,
    required : true
  },
  location : {
    type : String,
    required : true
  },
})

module.exports = mongoose.model ('SearchHistoryModel', searchHistory);