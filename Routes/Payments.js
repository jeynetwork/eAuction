const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");
const _ = require("lodash");
const auth = require("../middleware/auth");
const { Payments, validatePayments } = require("../Models/Payment");
const { Biddings, validateBiddings } = require("../Models/Bidding");

Router.use(bodyParser.urlencoded({ extended: true }));
Router.use(bodyParser.json());

Router.get("/", auth, async (req, res) => {
  const payments = await Payments.find();
  res.send(payments);
});

Router.post("/", auth, async (req, res) => {
  const { error } = validatePayments(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const newPayment = new Payments(
    _.pick(req.body, ["bidId", "bidReference", "paymentStatus"])
  );
  const findBid = await Biddings.findById(req.body.bidId);
  if (!findBid) return res.send("Unable to perform this payment");
  const result = await newPayment.save();
  res.send(result);
});

module.exports = Router;
