const express         = require('express');
const router          = express.Router();
const User            = require('../models/users.js');
const rp              = require('request-promise');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const passport              = require('passport');
const localStrategy         = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');


router.use(require('express-session')({
  secret: 'I am Brother Nature',
  resave: false,
  saveUninitialized: false
}))

router.use(bodyParser.urlencoded({extended: false}));
router.use(methodOverride('_method'));
router.use(passport.initialize());
router.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get('/', (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.render('users/index.ejs',{
      users: foundUsers
    })
  })
})


router.post('/getBreweryData', (req, res) => {
  // console.log('==========')
  // User.create(req.body['breweryData'], () => {
  //   User.findOne({username: req.session.username}, (err, foundUser) => {
      req.user.brewery.push(req.body['breweryData']);
      req.user.save();
      console.log(req.user);
      res.render('/users');
      // console.log('=============');
      // console.log(req.body['breweryData']);

})

router.get('/:id', isLoggedIn, (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('users/show.ejs', {
      user: foundUser
    })
  })
})

router.get('/new', (req, res) => {
  res.render('users/new.ejs');
});

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    res.redirect('/users')
  })
})

router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('users/edit.ejs', {
      user: foundUser
    })
  })
})

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/users')
  })
})

router.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.redirect('/users')
  })
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

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
