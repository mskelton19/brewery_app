const express   							=   require ('express');
const app       							=   express();
const mongoose  							=   require('mongoose');
const bodyParser 							=		require('body-parser');
const passport								=		require('passport');
const LocalStrategy 					=		require('passport-local');
const passportLocalMongoose 	= 	require('passport-local-mongoose');
const User 										=		require('./models/users.js')
const session 								=		require('express-session');


app.use(require('express-session')({
	secret:"And I'm Brother Nature",
	resave: false,
	saveUninitialized: false
}))
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// app.use(methodOverride('_method'));

const breweries = require('./controllers/breweries.js');
app.use('/breweries', breweries);

const locations = require('./controllers/locations.js');
app.use('/locations', locations);

const users = require('./controllers/users.js');
app.use('/users', users);


// ==============
// Routes
// ==============

// Auth Routes
// Auth Routes
// show sign up form
app.get('/register', function(req, res) {
  res.render('Auth/register.ejs')
})

// handle user signup
app.post('/register', function(req, res) {
	req.body.username
	req.body.password
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render('Auth/register.ejs');
		}
		passport.authenticate('local')(req, res, function(){
			res.render('/users');
		})
	})
})

// login functionality
// render login form
app.get('/login', function(req, res) {
	res.render('Auth/login.ejs');
})

// Login logic
app.post('/login',passport.authenticate('local', {
	successRedirect:'/',
	failureRedirect:'login'
}), function(req, res) {
})

// Logout
app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/')
})

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/login');
}

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/breweries';
mongoose.connect(mongoUri);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('listening');
});
