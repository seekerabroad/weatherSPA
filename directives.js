// CUSTOM DIRECTIVES
weatherApp.directive("daysCount", function() {
	return {
		templateUrl: 'directives/days.htm',
		replace: true
	}
});

weatherApp.directive("forecastReport", function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/forecastReport.htm',
		replace: true,
		scope: {
			forecastDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
})