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



weatherApp.controller('forcastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService) {

	$scope.city = cityService.cityName;

	// gets the weather api json data and makes it available to the scope. callback verifies the get to the browser
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2 });

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