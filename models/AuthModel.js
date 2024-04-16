const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

const auth = new Schema ({
  email : {
    type : String,
    required : true,
    unique: true
  },
  password : {
    type : String,
    required : true
  },
})

auth.pre("save", async function (next) {
  try {
    console.log("old password: ", this.password);
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    console.log("new password: ", this.password);
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model ('Auth', auth);