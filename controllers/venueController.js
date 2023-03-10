const { Venue } = require("../Model/venueModel");

//CRUD

//Create one

const createVenue = async(req, res) => {
  try {
    const venue = await Venue.create(req.body);
    res.status(200).json(venue);

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message })
  }

};

//Read all

const getVenues = (req, res) => {
  res.send("I am the get venues route");
};

module.exports = {
  getVenues,
  createVenue,
};

// "name": "Teatro Caupolican",
// "country": "Chile",
// "capacity": 7000
