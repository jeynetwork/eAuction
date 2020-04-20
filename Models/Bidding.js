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
    bidder: Joi.String().required(),
    bidReference: Joi.String().minlength(3).maxlength(25).required(),
    auctionId: Joi.String().required(),
    amount: Joi.Number().required(),
    bidStatus: Joi.String().required(),
  };
  return Joi.validate(biddings, schema);
}
exports.Biddings = Biddings;
exports.validateBiddings = validateBiddings;
