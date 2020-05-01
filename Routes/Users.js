const express = require("express");
const Router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const auth = require("../middleware/auth");

const { Users, validateUser } = require("../Models/User");
const admin = require("../middleware/isAdmin");
const seller = require("../middleware/isSeller");
const bidder = require("../middleware/isBidder");

Router.use(bodyParser.urlencoded({ extended: true }));
Router.use(bodyParser.json());

Router.get("/", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});

Router.post("/", admin, async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.message);
  } else {
    const findUser = await Users.findOne({ email: req.body.email });
    if (findUser) {
      return res.send("This account already exists");
    } else {
      let user = new Users(
        _.pick(req.body, [
          "name",
          "email",
          "profile",
          "dateOfBirth",
          "password",
          "category",
          "contact",
          "city",
          "address",
        ])
      );
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash("user.password", salt);
      const savedUser = await user.save();
      res.send(savedUser);
    }
  }
});
Router.put("/:id", [auth, admin], async (req, res) => {
  let findById = await Users.findById(req.params.id);
  if (!findById) return res.status(400).send("this user does not exist");

  const { error } = validateUser(req.body);
  if (error) return res.status.send(error.details[0].message);

  const salt = await bcrypt.genSalt(10);
  findById.name = req.body.name;
  findById.email = req.body.email;
  findById.profile = req.body.profile;
  findById.dateOfBirth = req.body.dateOfBirth;
  findById.password = await bcrypt.hash(req.body.password, salt);
  findById.category = req.body.category;
  findById.contact = req.body.contact;
  findById.city = req.body.city;
  findById.address = req.body.address;

  await findById.save();
  res.send(findById);
});
Router.delete("/:id", [auth, admin], async (req, res) => {
  let findById = await Users.findById(req.params.id);
  if (!findById) return res.status(400).send("this user does not exist");
  await findById.delete();
  res.send("user successfully deleted");
});

module.exports = Router;
