const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("My router");
});

module.exports = router;