const BreweryDb = require('node-brewerydb');
const client = new BreweryDb ((apiKey: '18332a604bfda0ef56cfa29deff412f2'));

client.beers({name: 'Tecate'}, function(err, res) {
  if (err) {
  }
  console.log(res);
});


module.exports = findBreweries;
