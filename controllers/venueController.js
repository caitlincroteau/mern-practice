const { Venue } = require("../Model/venueModel");

//CRUD

//Create one
const createVenue = async (req, res) => {
  try {
    const venue = await Venue.create(req.body);
    res.status(200).json(venue);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//Read all
const getVenues = async (req, res) => {
  try {
    //get all venues with find({}) method
    const venues = await Venue.find({});
    res.status(200).json(venues);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//Read one
const getVenue = async (req, res) => {
  try {
    //get one venue
    const { id } = req.params;
    const venue = await Venue.findById(id);
    res.status(200).json(venue);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//Update one

module.exports = {
  getVenues,
  getVenue,
  createVenue,
};

// "name": "Teatro Caupolican",
// "country": "Chile",
// "capacity": 7000
