const router = require("express").Router();
const { getVenues, createVenue } = require("./controllers/venueController");

router.get("/", (req, res) => {
  res.send("My router");
});

router.get("/venues", getVenues);

router.post("/venue", createVenue);

module.exports = { router };
