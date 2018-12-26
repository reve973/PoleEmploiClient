(function () {
	'use strict';
	
	var app = angular.module('mainApp');

	app.factory('contratService', ['$http', '$q', 'URL_API', function($http, $q, URL_API) {
		var $service = {};

		// FindAll 
		$service.findAll = function() {
			var promise = $http.get(URL_API + '/contrat/get/all')
				.then(
					function(response){
						console.log('findAll : success');
						return response.data;
					}, 
					function(errResponse){
						console.log('findAll : error');
						return errResponse;
					}
				);		
			return promise;	
		};

		return $service;
	}]);

})();