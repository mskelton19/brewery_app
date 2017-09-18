const app   =   angular.module('BrewFinder', []);

app.controller('BreweryController', ['$http', function($http) {
  const controller = this;
  this.breweries = [];

  this.findBreweries = function(){
    $http({
      method: 'GET',
      url: '/breweries'
    }).then(function(response){
      console.log(response)
      this.foundBrewery = response.data.data
      controller.breweries.push(this.foundBrewery)
      console.log(foundBrewery)
    },
      function(err){
      })
  }


}]);
