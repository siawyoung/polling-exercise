/**
* polls Module
*
* The main module for the Polls app.
*/

var polls = angular.module('polls', ['ngRoute', 'poll.controllers'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/polls', 
			{
				templateUrl: "partials/list.html",
				controller: 'pollListController'	
			})
			.when('/polls/:pollId',
			{
				templateUrl: "partials/item.html",
				controller: 'pollItemController'
			})
			.when('/new',
			{
				templateUrl: "partials/new.html",
				controller: 'pollNewController'
			})
			.otherwise(
			{
				redirectTo: '/polls'
			});
	}
]);

// angular.module('polls', ['pollServices']).
// 	config(['$routeProvider', function($routeProvider) {
// 		$routeProvider.
// 			when('/polls', { templateUrl: 'partials/list.html', controller: PollListCtrl }).
// 			when('/poll/:pollId', { templateUrl: 'partials/item.html', controller: PollItemCtrl }).
// 			when('/new', { templateUrl: 'partials/new.html', controller: PollNewCtrl }).
// 			// If invalid route, just redirect to the main list view
// 			otherwise({ redirectTo: '/polls' });
// 	}]);
	