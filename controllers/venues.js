const Venue = require("../Model/Venue");

//CRUD

//Create one

const createVenue = (req, res) => {
  const venue = new Venue({
    name: req.body.name,
    country: req.body.country,
    capacity: req.body.capacity,
    isActive: true,
  });

  venue.save((err, venue) => {
    if (err) {
      res.send(err);
    }
    res.json(venue);
  });
};

//Read all

const getVenues = (req, res) => {
  res.send("I am the get venues route");
};

module.exports = {
  getVenues, createVenue
};
