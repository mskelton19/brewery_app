const app   =   angular.module('BrewFinder', []);

app.controller('BreweryController', ['$http', function($http) {
  const controller = this;
  this.breweries = [];
  this.locations = [];
  let breweryData = [];
  this.brewery = {};

  this.findBreweriesByZip = function(){
    $http({
      method: 'GET',
      url: '/breweries/' + this.zip,
      dataType:'json',
        data: {
          zip: this.zip
        }
    }).then(function(response){
      console.log('here is a response:', response);
      console.log(response.data.data);
      controller.breweries = response.data.data
      // this.foundBreweryByZip = response.data.data
      // controller.breweries.push(this.foundBreweryByZip)
      // console.log(foundBreweryByZip)
      // console.log(controller.zip)
    }),
      function(err){
      }
  }


  this.findBreweriesByCity = function(){
    $http({
      method: 'GET',
      url: '/breweries/' + this.city,
      dataType:'json',
        data: {
          zip: this.city
        }
    }).then(function(response){
      this.foundBreweryByCity = response.data.data
      controller.breweries.push(this.foundBreweryByCity)
      console.log(foundBreweryByCity)
      console.log(controller.city)
    }),
      function(err){
      }
  }

  this.findLocations = function(){
    $http({
      method: 'GET',
      url: '/locations'
    }).then(function(response){
      this.foundLocation = response.data.data
      controller.locations.push(this.foundLocation)
      console.log(foundLocation)
      // this.foundLocation = response.data.data
      // controller.locations.push(this.foundLocation)
      // console.log(foundLocation)
    })
  }


  this.saveBrewery = function(index){
    $http({
      method: 'POST',
      url: 'users/getBreweryData',
      data: {

        breweryData: controller.breweries[index]

      }
    }).then(
      function(response){
        console.log(response)
      },
      function(error){

      });
  };


}]);
