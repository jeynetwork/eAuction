module.exports = function (req, res, next) {
  if (!req.user.category === "SELLER")
    return res.status(403).send("Access denied");
  next();
};
