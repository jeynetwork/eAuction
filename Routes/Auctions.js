const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("all auctions");
});

Router.post("/", (req, res) => {
  res.send("new auction");
});
Router.put("/:id", (req, res) => {
  res.send("edit auction");
});
Router.delete("/", (req, res) => {
  res.send("auction deleted");
});

module.exports = Router;
