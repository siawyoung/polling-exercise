angular.module('poll.controllers', []).

	controller('pollListController', ['$scope', function($scope) {
		$scope.polls = [];
	}])

	.controller('pollItemController', ['$scope', function($scope, $routeParams) {
		$scope.poll = {};
		$scope.vote = function() {};
	}])

	.controller('pollNewController', ['$scope', function($scope) {
		$scope.poll = {
			question: '',
			choices: [{text: ''}, {text: ''}, {text: ''}]
		};

		$scope.addChoice = function() {
			$scope.poll.choices.push(
				{text: ''}
			)
		};

		$scope.createPoll = function() {};

	}]
	);