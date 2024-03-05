const mongoose = require("mongoose");;

const userSchema = new mongoose.Schema({
  name: String,
  phone_number: String,
  email: String,
  hobbies: String,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
