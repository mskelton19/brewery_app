const mongoose = require('mongoose');

const brewerySchema = mongoose.Schema({
  name: String,
  address: String,
  website: String,
  id: String
})

const Breweries = mongoose.model('Brewery', brewerySchema);

module.exports = Breweries;
