const router = require("express").Router();
const { getVenues, createVenues } = require("./controllers/venues")

router.get("/", (req, res) => {
  res.send("My router");
});

router.get("/venues", getVenues);

router.post("/venues", createVenues);

module.exports = { router };
