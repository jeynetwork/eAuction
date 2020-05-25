const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 25,
    minlength: 3,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  category: {
    type: String,
    enum: ["BIDDER", "SELLER", "ADMIN"],
    uppercase: true,
  },
  contact: {
    type: String,
    required: true,
    max: 10,
    min: 9,
  },
  city: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  address: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
});

userSchema.methods.genAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, category: this.category },
    "mySamplePrivavteKey"
  );
  return token;
};

const Users = mongoose.model("User", userSchema);
function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).max(25).required(),
    email: Joi.string().required().email(),
    profile: Joi.string().required(),
    dateOfBirth: Joi.string().required(),
    password: Joi.string().min(5).max(15),
    category: Joi.string(),
    contact: Joi.string().min(10).max(10).required(),
    city: Joi.string().min(3).max(50),
    address: Joi.string().min(3).max(50),
  };
  return Joi.validate(user, schema);
}

exports.Users = Users;
exports.validateUser = validateUser;
