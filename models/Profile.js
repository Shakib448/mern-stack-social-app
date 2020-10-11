const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // This is mongoose id
    ref: "user", // This refers to the user model like module.exports = User = mongoose.model("//user//", userSchema);
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], //This is mean array that's why I used here [] this
    required: true,
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
});
