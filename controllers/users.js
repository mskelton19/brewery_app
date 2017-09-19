const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const rp = require('request-promise');

router.get('/secret', function(req, res){
  res.render('secret.ejs');
});



module.exports = router;
