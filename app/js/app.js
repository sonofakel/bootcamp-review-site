var myApp = angular.module('myApp', [
  'angucomplete-alt',
  'ngRoute',
  'myControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/app/js/partials/search.html',
      controller: 'SearchController'
    })
    .when('/details/:itemId', {
      templateUrl: '/app/js/partials/details.html',
      controller: 'DetailsController'
    });
}]);