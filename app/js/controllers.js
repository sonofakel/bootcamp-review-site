var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController',
  function myControllers($scope, $http) {
    $http.get('/app/js/data.json').then(function(response) {
      $scope.bootcamps = response.data;
      $scope.selectedBootcamp = 0;
      $scope.goToBootcamp = function(item, bootcamps) {
        let itemIndex = bootcamps.indexOf(item.originalObject);
        return itemIndex;   
      }
    });
  });

  myControllers.controller('DetailsController',
  function myControllers($scope, $http, $routeParams) {
    $http.get('/app/js/data.json').then(function(response) {
      $scope.bootcamps = response.data;
      $scope.whichItem = $routeParams.itemId;
    });
  });