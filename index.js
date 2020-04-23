const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

const Users = require("./Routes/Users");
const Auctions = require("./Routes/Auctions");
const Bidding = require("./Routes/Biddings");
const Payment = require("./Routes/Payments");
const Auth = require("./Routes/auth");

mongoose
  .connect("mongodb://localhost/Auctions")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err.message));

app.use(express.json());

app.use("/eAuction/users", Users);
app.use("/eAuction/auctions", Auctions);
app.use("/eAuction/biddings", Bidding);
app.use("/eAuction/payments", Payment);
app.use("/eAuction/auth", Auth);
app.get("/", (req, res) => {
  res.send("hello worlds");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));
