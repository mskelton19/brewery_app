const express = require('express');
const router = express.Router();
const Brewery = require('../models/breweries.js');
const rp = require('request-promise');
// const BreweryDb = require('node-brewerydb');
// const client = new BreweryDb ({apiKey: '18332a604bfda0ef56cfa29deff412f2'});

// const findBrewery = require('../bin/breweries.js');

router.get('/', (req, res) => {
  rp({uri: 'http://api.brewerydb.com/v2/brewery/random?key=18332a604bfda0ef56cfa29deff412f2', json: true})
    .then(function (response) {
      res.send(response)
        // Process html...
    })
    .catch(function (err) {
      console.log(err)
        // Crawling failed...
    });
  // res.send('hello');
  // client.beers({name: 'Tecate'}).then(function(res) {
  //   res.send(res);
  // }, function(err) {
  //   res.send(err)
  // });
})

module.exports = router;
