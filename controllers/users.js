const express        =   require('express');
const router         =   express.Router();
const User           =   require('../models/users.js');
const bodyParser     =   require('body-parser');
const methodOverride =   require('method-override');

router.use(bodyParser.urlencoded({extended:false}));
router.use(methodOverride('_method'));

router.get('/', (req, res) => {
  console.log('hello');
})


module.exports = router;
