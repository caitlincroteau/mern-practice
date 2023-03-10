const mongoose = require("mongoose");

const VenueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  capacity: {
    type: Integer,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = mongoose.model("Venues", VenueSchema);
