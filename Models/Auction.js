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
      type: Date,
      required: true,
    },
    auctionEnd: {
      type: Date,
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
    seller: Joi.string().min(3).max(25).required(),
    itemName: Joi.string().min(3).max(25).required(),
    image: Joi.string().required(),
    quantity: Joi.number().default(1).required(),
    minPrice: Joi.number().required(),
    auctionStart: Joi.date().required(),
    auctionEnd: Joi.date().required(),
    auctionDescription: Joi.string().min(5).max(100).required(),
  };
  return Joi.validate(auction, schema);
}
exports.Auctions = Auctions;
exports.validateAuction = validateAuction;
