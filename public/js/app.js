const app   =   angular.module('BrewFinder', []);

app.controller('BreweryController', ['$http', function($http) {
  const controller = this;

  this.findBreweries = function(){
    $http({
      method: 'GET',
      url: '/breweries',
    }).then(function(response){
      console.log(response.data)
    }).then(
      function(response){
        console.log(response);
      })
  }


}]);
