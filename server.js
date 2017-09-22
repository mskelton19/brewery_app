const express   							=   require ('express');
const app       							=   express();
const mongoose  							=   require('mongoose');
const bodyParser 							=		require('body-parser');
const passport								=		require('passport');
const LocalStrategy 					=		require('passport-local');
const passportLocalMongoose 	= 	require('passport-local-mongoose');
const User 										=		require('./models/users.js')
const session 								=		require('express-session');
require('dotenv').config();

app.use(require('express-session')({
	secret: 'I am Brother Nature',
	resave: false,
	saveUninitialized: false
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// =========
// Routes
// =========
app.get('/secret',isLoggedIn, (req, res) => {
	res.render('secret.ejs')
})

// Auth Routes
app.get('/register', (req, res) => {
	res.render('register.ejs')
})

app.post('/register', (req, res) => {
	req.body.username
	req.body.password
	req.body.location
	User.register(new User({username: req.body.username}, {location: req.body.location}), req.body.password, function(err, user){
		if(err) {
			console.log(err);
			return res.render('register');
		}
		passport.authenticate('local')(req, res, function(){
			res.redirect('/')
		})
	})
})

// login get route
app.get('/login', (req, res) => {
	res.render('login.ejs')
})

// login logic
app.post('/login',passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login'
}), (req, res) => {
})

// logout route
app.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/login')
})

// middleware; checking for loggedin
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/login')
}




const breweries = require('./controllers/breweries.js');
app.use('/breweries', breweries);

const locations = require('./controllers/locations.js');
app.use('/locations', locations);

const users = require('./controllers/users.js');
app.use('/users', users);



const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/breweries';
mongoose.connect(mongoUri);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('listening');
});
