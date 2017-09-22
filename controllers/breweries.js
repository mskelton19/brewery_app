const express = require('express');
const router = express.Router();
const Brewery = require('../models/breweries.js');
const rp = require('request-promise');
const User = require('../controllers/users.js');
const apiKey = process.env.KEY1;


// const BreweryDb = require('node-brewerydb');
// const client = new BreweryDb ({apiKey: '18332a604bfda0ef56cfa29deff412f2'});

// const findBrewery = require('../bin/breweries.js');



router.get('/:postalCode', (req, res) => {
  console.log(req.params)
  rp({uri: 'http://api.brewerydb.com/v2/locations?postalCode=' + req.params.postalCode + '&key=' + apiKey, json: true})
    .then(function (response) {
      res.send(response)
        // Process html...
    })
  })

// router.get('/', (req, res) => {
//   console.log(req.params)
//   p({uri: 'http://api.brewerydb.com/v2/locations?locality=Raleigh&key=' + apiKey, json: true})
//     .then(function (response) {
//       res.send(response)
//         // Process html...
//     })
// })
//
// router.get('/', (req, res) => {
//   rp({uri:'http://api.brewerydb.com/v2/brewery/zeWbuM/locations?key='1+ apiKey, json: true})
// .then(function(response) {
//   console.log(response)
// })
//     });


module.exports = router;
