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

// SERVICES
// CUSTOM SERVICES
weatherApp.service( 'weatherService', [ function(){

	this.cityName = '';
	
}])

// CONTROLLERS

weatherApp.controller('homeController', ['$scope','weatherService', function($scope, weatherService) {
    
    $scope.city = weatherService.cityName;
    // watches name binding and updates custom serice singleton on change event
    $scope.$watch('city', function() {
    	weatherService.cityName = $scope.city;
    })

}]);



weatherApp.controller('forcastController', ['$scope','weatherService', function($scope, weatherService) {

	$scope.city = weatherService.cityName;

}]);