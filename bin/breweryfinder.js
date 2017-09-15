const BreweryDb = require('node-brewerydb');
const client = new BreweryDb ((apiKey: '18332a604bfda0ef56cfa29deff412f2'));

const findBreweries = (res, data) => {

  const response = (res, data) => {
    res.send(data)
  }

client.beers({name: 'Tecate'}, function(err, res) {
  if (err) {
  }
  console.log(res);
})
}


module.exports = findBreweries;
