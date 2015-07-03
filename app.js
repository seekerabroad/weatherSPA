// IMODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES

weatherApp.config(['$routeProvider', function ($routeProvider) {
   
   $routeProvider
   
   .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
   })
   
   .when('/forcast', {
        templateUrl: 'pages/forcast.htm',
        controller: 'forcastController'
   })
   
}]);

// CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$location', function($scope, $location) {
    
    

}]);

weatherApp.controller('forcastController', ['$scope', '$location','$routeParams', function($scope, $location, $routeParams) {

}]);