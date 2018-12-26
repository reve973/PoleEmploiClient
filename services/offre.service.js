(function () {
	'use strict';
	
	var app = angular.module('mainApp');

	app.factory('offreService', ['$http', '$q', 'URL_API', function($http, $q, URL_API) {
		var $service = {};

		// FindAll 
		$service.findAll = function(page, size, sortColumn, sortOrder, keyword, commune, cdd, cddi, cdi) {
			var promise = $http.get(URL_API + '/offre/get/all/page', {params: {page: page, size: size, sortorder: sortOrder, sortcolumn: sortColumn, 
																commune: commune, motclef: keyword, 
																cdd: cdd, cddi: cddi, cdi: cdi}})
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

		// FindAll ByEntreprise
		$service.findAllByEntreprise = function(idEntreprise, page, size, sortColumn, sortOrder, keyword, commune, cdd, cddi, cdi) {
			var promise = $http.get(URL_API + '/offre/entreprise/' + idEntreprise + '/get/all/page', {params: {page: page, size: size, sortorder: sortOrder, sortcolumn: sortColumn, 
																commune: commune, motclef: keyword, 
																cdd: cdd, cddi: cddi, cdi: cdi}})
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


		$service.findFromId = function(idOffre) {
			//return this.http.get<Offre>('http://localhost:8081/api/offre/get/id/' + id);

			var promise = $http.get(URL_API + '/offre/get/id/' + idOffre)
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
		}
		
		$service.delete = function(idOffre) {
			//return this.http.delete<Offre>('http://localhost:8081/api/offre/delete/id/' + offre.id);
			var promise = $http.delete(URL_API + '/offre/delete/id/' + idOffre)
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
		}
		
		$service.update = function(offre) {
			//return this.http.post<Offre>('http://localhost:8081/api/offre/update', offre);
			var promise = $http.post(URL_API + '/offre/update', offre)
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
		}
		
		$service.create = function(offre, idEntreprise) {
			//return this.http.post<Offre>('http://localhost:8081/api/offre/entreprise/' + idEntreprise + '/save', offre);
			var promise = $http.post(URL_API + '/offre/entreprise/' + idEntreprise + '/save', offre)
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
		}

		return $service;
	}]);

})();