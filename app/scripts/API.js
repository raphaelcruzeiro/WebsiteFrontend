'use strict';

(function() {
	var module = angular.module('API', []);
	module.service('API', function() {
		//this.baseUrl = 'http://127.0.0.1:8111';
		this.baseUrl = 'http://api.raphaelcruzeiro.eu';
		this.contact = [this.baseUrl, 'contact/'].join('/');
	});
})();
