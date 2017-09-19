const app   =   angular.module('BrewFinder', []);

app.controller('BreweryController', ['$http', function($http) {
  const controller = this;
  this.breweries = [];
  this.locations = [];
  this.zip = {}

  this.findBreweries = function(){
    $http({
      method: 'GET',
      url: '/breweries',
      dataType:'json',
      data:{
        zip: this.zip
      }
    }).then(function(response){
      this.foundBrewery = response.data.data
      controller.breweries.push(this.foundBrewery)
      console.log(foundBrewery)
      console.log(controller.zip)
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


}]);
