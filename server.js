const express   			=   require ('express');
const app       			=   express();
const mongoose  			=   require('mongoose');
const bodyParser 			=		require('body-parser');
// const methodOverride 	= 	require('method-override');
const session 				=		require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
// app.use(methodOverride('_method'));


const breweries = require('./controllers/breweries.js');
app.use('/breweries', breweries);

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/breweries';
mongoose.connect(mongoUri);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('listening');
});
