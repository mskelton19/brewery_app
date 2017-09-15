const express = require('express');
const router = express.Router();
const Pets = require('../models/breweries.js');

const findBreweries = require('../bin/breweries.js');

router.post('/findBreweries', (req, res) => {
	console.log(res);
})

module.exports = router;
