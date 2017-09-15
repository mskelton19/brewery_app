const app   =   angular.module('BrewFinder', []);

app.controller('BreweryController', ['$http', function($http) {
  const controller = this;

  this.findBreweries = function(){
    $http({
      method: 'GET',
      url: '/breweries/findBreweries'
    }).then(function(response){
      console.log(reponse.data)
    })
  }


}]);
