const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("all bidding");
});

Router.post("/", (req, res) => {
  res.send("new bidding");
});
Router.put("/:id", (req, res) => {
  res.send("edit bidding");
});
Router.delete("/", (req, res) => {
  res.send("user bidding");
});

module.exports = Router;
