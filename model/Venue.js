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
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = mongoose.model("Venue", VenueSchema);
