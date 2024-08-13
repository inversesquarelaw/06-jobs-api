const moongose = require("mongoose");

const UserSchema = new moongose.Mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ], // regex for email validation
    unique: true, // email must be unique for each user
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    maxlength: 12,
  },
});

module.exports = moongoose.model("User", UserSchema);
