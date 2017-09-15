const express   =   require ('express');
const app       =   express();
const mongoose  =   require('mongoose');


const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/breweries';
mongoose.connect(mongoUri);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('listening');
});
