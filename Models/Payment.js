const mongoose = require("mongoose");
const Joi = require("joi");

const Payments = mongoose.model(
  "Bidding",
  new mongoose.Schema({
    bidId: {
      type: String,
      required: true,
    },
    bidReference: {
      type: String,
      maxlength: 25,
      minlength: 3,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "notPaid"],
      default: "notPaid",
    },
  })
);

function validatePayments(payments) {
  const schema = {
    bidId: Joi.String().required(),
    bidReference: Joi.String().minlength(3).maxlength(25).required(),
    paymentStatus: Joi.String().required(),
  };
  return Joi.validate(payments, schema);
}
exports.Biddings = Payments;
exports.validateBiddings = validatePayments;
