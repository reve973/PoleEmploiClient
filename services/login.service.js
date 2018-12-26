(function () {
	'use strict';
	
	var app = angular.module('mainApp');

	app.factory('loginService', ['$http', '$localStorage', '$q', 'URL_API', function($http, $localStorage, $q, URL_API) {
		var $service = {};

		// logout
		$service.logout = function() {
			$localStorage.$reset();
			//this.authEvent.emit();
		}

		// login
		$service.login = function(username, password, callback) {
				return $http.post(URL_API + '/auth/login', { username: username, password: password })
				.then(
						function(response){	
							$localStorage.currentUser = JSON.stringify(response.data.user);
							if (response.data.entreprise) {
								$localStorage.currentEntreprise = JSON.stringify(response.data.entreprise);
							}
							if (response.data.candidat) {
								$localStorage.currentCandidat = JSON.stringify(response.data.candidat);
							}
							$localStorage.currentUser = JSON.stringify(response.data.user);
							$localStorage.currentToken = response.data.token;
							$localStorage.currentRefreshToken = response.data.refreshToken;

							callback(true);
						}, 
						function(errResponse){
							console.error('Error while login');
							//return $q.reject(errResponse);
							callback(false);
						}
				);		
			};

			// getToken
			$service.getToken = function() {
				return $localStorage.currentToken;
			}

			// isauthenticated
			$service.isAuthenticated = function() {
				return $localStorage.currentUser != null;
			}
		
			// getAuthenticatedUser
			$service.getAuthenticatedUser = function() {
				return JSON.parse($localStorage.currentUser);
			}
		
			// getAuthenticatedCandidat
			$service.getAuthenticatedCandidat = function() {
				return JSON.parse($localStorage.currentCandidat);
			}
		
			// getAuthenticatedEntreprise
			$service.getAuthenticatedEntreprise = function() {
				return JSON.parse($localStorage.currentEntreprise);
			}
		
			// isAuthenticateUserCandidat
			$service.isAuthenticateUserCandidat = function() {
				return JSON.parse($localStorage.currentUser).role.nom === 'ROLE_CANDIDAT';
			}
		
			// isAuthenticateUserEntreprise
			$service.isAuthenticateUserEntreprise = function() {
				return JSON.parse($localStorage.currentUser).role.nom === 'ROLE_ENTREPRISE';
			}
		
			// isAuthenticateUserAdmin
			$service.isAuthenticateUserAdmin = function() {
				return JSON.parse($localStorage.currentUser).role.nom === 'ROLE_ADMIN';
			}
		
			// isAuthentsicatedEntreprise
			$service.isAuthentsicatedEntreprise = function() {
				return $localStorage.candidat != null;
			}			
	
			return $service;
	}]);
    
})();
         





