const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/classroom_management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("admin", userSchema);