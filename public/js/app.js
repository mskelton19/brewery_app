const app   =   angular.module('BrewFinder', []);

app.controller('BreweryController', ['$http', function($http) {
  const controller = this;
  this.breweries = [];

  this.findBreweries = function(){
    $http({
      method: 'GET',
      url: '/breweries',
      data: {
        name: this.name
      }
    }).then(function(response){
      console.log(response)
      this.foundBrewery = response.data
      console.log(response.data.data.name)
    },
      function(err){
      })
  }


}]);
