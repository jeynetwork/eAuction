const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const { Users, validateUser } = require("../Models/User");

Router.use(bodyParser.urlencoded({ extended: true }));
Router.use(bodyParser.json());

Router.post("/", async (req, res) => {
  const { error } = validateAuth(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  const authenticateUser = await Users.findOne({ email: req.body.email });
  if (!authenticateUser)
    return res.status(400).send("wrong username or password");
  const checkPassword = await bcrypt.compare(
    req.body.password,
    authenticateUser.password
  );
  if (!checkPassword) return res.status(400).send("wrong username or password");

  const token = authenticateUser.genAuthToken();
  res.header("x-auth-token", token).send(token);
});

function validateAuth(userAuth) {
  const schema = {
    email: Joi.string().required().email(),
    password: Joi.string().min(5).max(15),
  };
  return Joi.validate(userAuth, schema);
}

module.exports = Router;
