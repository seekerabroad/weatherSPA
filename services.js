// SERVICES
weatherApp.service( 'cityService', [ function(){

	this.cityName = 'London';
	
}])

weatherApp.service('weatherService', [ '$resource', function($resource){

	this.GetWeather = function(city, days) {
	// gets the weather api json data and makes it available to the scope. callback verifies the get to the browser
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});

    return weatherAPI.get({ q: city, cnt: days });
	};
}]);