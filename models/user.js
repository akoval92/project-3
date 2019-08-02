const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  password: { type: String, required: true },
  expiration: { type: Number }
});

const User = mongoose.model("User", userSchema);

module.exports = User;