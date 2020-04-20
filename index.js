const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Users = require("./Routes/Users");
const Auctions = require("./Routes/Auctions");
const Bidding = require("./Routes/Biddings");

mongoose
  .connect("mongodb://localhost/Auctions")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err.message));

app.use("/eAuction/users", Users);
app.use("/eAuction/auctions", Auctions);
app.use("/eAuction/biddings", Bidding);
app.get("/", (req, res) => {
  res.send("hello worlds");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));
