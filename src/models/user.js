const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  userID: String,
  password: String,
});
const User = mongoose.model("Users", userSchema);
module.exports = User;
