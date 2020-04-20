const mongoose = require("mongoose");
const Joi = require("joi");

const Auctions = mongoose.model(
  "Auction",
  new mongoose.Schema({
    seller: {
      type: String,
      required: true,
      maxlength: 25,
      minlength: 3,
    },
    itemName: {
      type: String,
      required: true,
      maxlength: 25,
      minlength: 3,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    minPrice: {
      type: Number,
      required: true,
    },
    auctionStart: {
      type: TimeRanges,
      required: true,
    },
    auctionPeriod: {
      type: Number,
      required: true,
    },
    auctionDescription: {
      type: String,
      minlength: 5,
      maxlength: 100,
    },
  })
);
function validateAuction(auction) {
  const schema = {
    seller: Joi.String().minlength(3).maxlength(25).required(),
    itemName: Joi.String().minlength(3).maxlength(25).required(),
    image: Joi.String().required(),
    quantity: Joi.Number().default(1).required(),
    minPrice: Joi.Number().required(),
    auctionStart: Joi.TimeRanges().required(),
    auctionPeriod: Joi.Number().required(),
    auctionDescription: Joi.String().minlength(5).maxlength(100).required(),
  };
  return Joi.validate(auction, schema);
}
exports.Auctions = Auctions;
exports.validateAuction = validateAuction;
