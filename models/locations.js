const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  name: String,
  city: String,
  latitude: String,
  longitude: String
})

const Locations = mongoose.model('Location', locationSchema);

module.exports = Locations;
