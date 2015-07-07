// IMODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES

weatherApp.config(['$routeProvider', function ($routeProvider) {
   
   $routeProvider
   
   .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
   })
   
   .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
   })

   .when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
   })
   
}]);

// SERVICES
// CUSTOM SERVICES
weatherApp.service( 'cityService', [ function(){

	this.cityName = '';
	
}])

// CONTROLLERS

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.cityName;

    // watches name binding and updates custom serice singleton on change event
    $scope.$watch('city', function() {
    	cityService.cityName = $scope.city;
    })

}]);



weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

	$scope.city = cityService.cityName;
	// variable to scope the number of days forcast required
	$scope.days = $routeParams.days  || '2';

	// gets the weather api json data and makes it available to the scope. callback verifies the get to the browser
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

    // converts degrees Kelvin to Farenheit
    // $scope.convertToFahrenheit = function(degK) {
    // 	return Math.round((1.8 * (degK -273)) + 32);
    // }

    // converts degrees Kelvin to Celsius
    $scope.convertToCelsius = function(degK) {
    	return Math.round(degK - 273.15);
    }

    // converts timestamp to date
    $scope.convertToDate = function(dt) {
    	return new Date(dt * 1000);
    }


}]);

// CUSTOM DIRECTIVES
weatherApp.directive("daysCount", function() {
	return {
		templateUrl: 'directives/days.htm',
		replace: true
	}
});