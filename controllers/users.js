const express         = require('express');
const router          = express.Router();
const User            = require('../models/users.js');
const rp              = require('request-promise');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

router.use(bodyParser.urlencoded({extended: false}));
router.use(methodOverride('_method'));

router.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.render('users/index.ejs',{
      users: foundUsers
    })
  })
})

router.get('/new', (req, res) => {
  res.render('users/new.ejs');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.send(createdUser)
  })
});

// router.get('/:id', (req, res) => {
//   User.findById(req.params.id, (error, User) => {
//     res.render('users/show.ejs', {
//       user: editUser
//     })
//   })
// })
//
// router.get('/:id/edit', (req, res) => {
//   User.findById(req.params.id, (error, editMember) => {
//     res.render('users/edit.ejs', {
//       user: editUser
//     })
//   })
// })



module.exports = router;
