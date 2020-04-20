const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("all payments");
});

Router.post("/", (req, res) => {
  res.send("new payment");
});
Router.put("/:id", (req, res) => {
  res.send("edit payment");
});
Router.delete("/", (req, res) => {
  res.send("payment delete");
});

module.exports = Router;
