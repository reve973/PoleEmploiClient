(function () {
    'use strict';

    var app = angular.module('mainApp');

    app.controller('HeaderCtrl', ['$scope', '$uibModal', '$log', '$rootScope', 'EVENT_LOGIN_SUCCESS', 'loginService', function ($scope, $uibModal, $log, $rootScope, EVENT_LOGIN_SUCCESS, loginService) {	
		
		//$rootScope.$on(EVENT_LOGIN_SUCCESS, function (evt, data) {
		//	alert('header event login');
		//});

		$scope.isAuthenticated = function () {
			return loginService.isAuthenticated();
		}

		$scope.getIdentificationUser = function () {
			if (loginService.isAuthenticateUserAdmin()) {
			  return 'Administrateur (' + loginService.getAuthenticatedUser().username + ')';
			}
		
			if (loginService.isAuthenticateUserEntreprise()) {
			  return 'Entreprise (' + loginService.getAuthenticatedEntreprise().denom + ' - ' +
			  						  loginService.getAuthenticatedUser().username + ')';
			}
		
			if (loginService.isAuthenticateUserCandidat()) {
			  return 'Candidat (' + loginService.getAuthenticatedCandidat().nom + ' ' +
			  						loginService.getAuthenticatedCandidat().prenom + ' - ' +
									  loginService.getAuthenticatedUser().username + ')';
			}
		
			return 'erreur';
		  }

		// CONNEXION
		$scope.connexion = function () {
			$scope.modalInstance = $uibModal.open({
				templateUrl: './components/login/login.html',
				windowClass: 'show',
				controller: 'LoginCtrl',
				size: 'lg',		
			}).opened.then(
				function (success) {
				},
				function (error) {
				}
			);
		}
		
		// DECONNEXION
		$scope.deconnexion = function () {
			loginService.logout();
			window.location = '#/';
		}
		
	}]);
    
})();
         


