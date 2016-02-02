var app = angular.module('tour_api.app', ['ngRoute', 'tour_api.service', 'tour_api.constant']),
	constant = angular.module('tour_api.constant', []).constant('', ''),
	service = angular.module('tour_api.service', ['ngResource', 'tour_api.constant'])
			.factory('Service', ['$resource', function($resource){
				
			}]);
			
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/main', {
				templateUrl : 'script/templates/main.html',
				controller : 'MainController',
				resolve : {}				
			})
			.otherwise({redirectTo : '/main'});
	}]);
	
	app.controller('AppController', ['$scope', function($scope){
		
	}]);
	
	app.controller('MainController', ['$scope', 'Service', function($scope, Service){
				
	}]);