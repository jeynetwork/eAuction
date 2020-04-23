const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");
const _ = require("lodash");

const auth = require("../middleware/auth");
const { Users, validateUser } = require("../Models/User");
const { Auctions, validateAuction } = require("../Models/Auction");
const { Biddings, validateBiddings } = require("../Models/Bidding");

Router.use(bodyParser.urlencoded({ extended: true }));
Router.use(bodyParser.json());

Router.get("/", auth, async (req, res) => {
  const biddings = await Biddings.find().select("-_id");
  res.send(biddings);
});

Router.post("/", auth, async (req, res) => {
  const { error } = validateBiddings(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const findBidder = await Users.findById(req.body.bidder);

  if (!findBidder) return res.status(400).send("Action denied");
  const findAuction = await Auctions.findById(req.body.auctionId);

  if (!findAuction) return res.status(400).send("Auction not available");
  const newBidding = new Biddings(
    _.pick(req.body, [
      "bidder",
      "bidReference",
      "auctionId",
      "amount",
      "bidStatus",
    ])
  );
  const savedBid = await newBidding.save();
  res.send(savedBid);
});
Router.put("/:id", auth, async (req, res) => {
  let findBidding = await Biddings.findById(req.params.id);
  if (!findBidding) return res.status(400).send("Invalid bidding");

  const { error } = validateBiddings(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const findBidder = await Users.findById(req.body.bidder);

  if (!findBidder) return res.status(400).send("Action denied");
  const findAuction = await Auctions.findById(req.body.auctionId);

  if (!findAuction) return res.status(400).send("Auction not available");
  findBidding.bidder = req.body.bidder;
  findBidding.bidReference = req.body.bidReference;
  findBidding.auctionId = req.body.auctionId;
  findBidding.amount = req.body.amount;
  findBidding.bidStatus = req.body.bidStatus;

  await findBidding.save();
  res.send(findBidding);
});
Router.delete("/:id", auth, async (req, res) => {
  const findBidding = await Biddings.findById(req.params.id);
  if (!findBidding) return res.status(400).send("Invalid bidding");
  await findBidding.delete();
  res.send("Bidding successfuly deleted");
});

module.exports = Router;
