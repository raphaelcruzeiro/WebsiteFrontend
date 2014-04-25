'use strict';

(function() {
	var module = angular.module('services.Contact', []);
	module.factory('ContactService', function($q, $http, API) {
		return {
			send: function(msg) {
				var deferred = $q.defer();
				$http.post(API.contact, msg).success(function(d) {
					if (d.status === 'ok') {
						deferred.resolve();
					} else {
						deferred.reject();
					}
				});
				return deferred.promise;
			}
		};
	});
})();
