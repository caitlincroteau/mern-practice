const router = require("express").Router();
const {
  getVenues,
  getVenue,
  createVenue,
} = require("./controllers/venueController");

router.get("/", (req, res) => {
  res.send("My router");
});

//read all
router.get("/venues", getVenues);

//read one
router.get("/venues/:id", getVenue);

//add one
router.post("/venue", createVenue);

module.exports = { router };
