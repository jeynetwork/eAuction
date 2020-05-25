const express = require("express");
const Router = express.Router();
const _ = require("lodash");
const bodyParser = require("body-parser");
const { Auctions, validateAuction } = require("../Models/Auction");
const { Users, validateUser } = require("../Models/User");
const auth = require("../middleware/auth");
const admin = require("../middleware/isAdmin");
const seller = require("../middleware/isSeller");

Router.use(bodyParser.urlencoded({ extended: true }));
Router.use(bodyParser.json());

Router.get("/", async (req, res) => {
  const auction = await Auctions.find();
  res.send(auction);
});

Router.post("/", async (req, res) => {
  const { error } = validateAuction(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const findSeller = await Users.findById(req.body.seller);
  // if (!findSeller) return res.status(400).send("action denied");

  if (findSeller.category != "SELLER")
    return res.status(400).send("action denied");

  const auction = new Auctions(
    _.pick(req.body, [
      "seller",
      "itemName",
      "image",
      "quantity",
      "minPrice",
      "auctionStart",
      "auctionEnd",
      "auctionDescription",
    ])
  );

  const savedAuction = await auction.save();
  res.send(savedAuction);
});
Router.put("/:id", [auth, seller], async (req, res) => {
  let findAuction = await Auctions.findById(req.params.id);
  if (!findAuction) return res.status(400).send("Invalid auction");
  const { error } = validateAuction(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const findSeller = await Users.findById(req.body.seller);
  if (!findSeller) return res.status(400).send("action denied");
  if (findSeller.category != "SELLER")
    return res.status(400).send("action denied");
  findAuction.seller = req.body.seller;
  findAuction.itemName = req.body.itemName;
  findAuction.image = req.body.image;
  findAuction.quantity = req.body.quantity;
  findAuction.minPrice = req.body.minPrice;
  findAuction.auctionStart = req.body.auctionStart;
  findAuction.auctionEnd = req.body.auctionEnd;
  findAuction.auctionDescription = req.body.auctionDescription;

  await findAuction.save();
  res.send(findAuction);
});
Router.delete("/:id",  async (req, res) => {
  let findAuction = await Auctions.findById(req.params.id);
  if (!findAuction) return res.status(400).send("Invalid auction");
  await findAuction.delete();
  res.send("auction deleted");
});

module.exports = Router;
