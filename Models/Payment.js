const mongoose = require("mongoose");
const Joi = require("joi");

const Payments = mongoose.model(
  "Payment",
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
    bidId: Joi.string().required(),
    bidReference: Joi.string().min(3).max(25).required(),
    paymentStatus: Joi.string(),
  };
  return Joi.validate(payments, schema);
}
exports.Payments = Payments;
exports.validatePayments = validatePayments;
