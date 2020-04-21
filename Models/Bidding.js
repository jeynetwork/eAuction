const mongoose = require("mongoose");
const Joi = require("joi");

const Biddings = mongoose.model(
  "Bidding",
  new mongoose.Schema({
    bidder: {
      type: String,
      required: true,
    },
    bidReference: {
      type: String,
      maxlength: 25,
      minlength: 3,
      required: true,
    },
    auctionId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    bidStatus: {
      type: String,
      enum: ["approved", "declined", "pending"],
      default: "pending",
    },
  })
);

function validateBiddings(biddings) {
  const schema = {
    bidder: Joi.string().required(),
    bidReference: Joi.string().min(3).max(25).required(),
    auctionId: Joi.string().required(),
    amount: Joi.number().required(),
    bidStatus: Joi.string(),
  };
  return Joi.validate(biddings, schema);
}
exports.Biddings = Biddings;
exports.validateBiddings = validateBiddings;
