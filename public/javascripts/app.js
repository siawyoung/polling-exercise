/**
* polls Module
*
* The main module for the Polls app.
*/

var polls = angular.module('polls', [
	'ngRoute',
	'poll.controllers',
	'poll.services'
	])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/polls', 
			{
				templateUrl: "partials/list.html",
				controller: 'pollListController'	
			})
			.when('/poll/:pollId',
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
	