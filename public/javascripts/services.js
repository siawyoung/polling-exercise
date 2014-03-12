angular.module('poll.services', ['ngResource']).
	
	factory('Poll', ['$resource', function($resource) {
		return $resource('/polls/:pollId', {}, {
			query: { method: 'GET', params: { pollId: 'polls' }, isArray: true }
		});
	}])

	.factory('socket', ['$rootScope', function($rootScope) {
		var socket = io.connect();
		return {
			on: function(eventName, callback) {
				socket.on(eventName, function() {
					var args = arguments;
					$rootScope.$apply(function() {
						callback.apply(socket,args);
					});
				});
			},

			emit: function(eventName, data, callback) {
				socket.emit(eventName, data, function() {
					var args = arguments;
					$rootScope.$apply(function() {
						if (callback) {
							callback.apply(socket.args);
						}
					});
				});
			}
		};
	}]);