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

weatherApp.controller('homeController', ['$scope', function($scope) {
    
    

}]);

weatherApp.controller('forcastController', ['$scope','$routeParams', function($scope, $routeParams) {

}]);