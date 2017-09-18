const express = require('express');
const router = express.Router();
const Location = require('../models/locations.js');
const rp = require('request-promise');
// const BreweryDb = require('node-brewerydb');
// const client = new BreweryDb ({apiKey: '18332a604bfda0ef56cfa29deff412f2'});

// const findBrewery = require('../bin/breweries.js');


router.get('/', (req, res) => {
  rp({uri:'http://api.brewerydb.com/v2/brewery/TMc6H2/locations?key=18332a604bfda0ef56cfa29deff412f2', json: true})
.then(function(response) {
  res.send(response)
})
    });


module.exports = router;
