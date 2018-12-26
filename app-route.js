'use strict';

var app = angular.module("mainApp");

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/offre/liste', {
			templateUrl: './components/offre/offre-liste.html',
			controller: 'OffreListCtrl',
			css: './components/offre/offre-liste.css',
		})
		.when('/entreprise/offre/liste', {
			templateUrl: './components/entreprise/offre/offre-liste.html',
			controller: 'EntrepriseOffreListCtrl',
			css: './components/entreprise/offre/offre-liste.css',
		})
		.when('/entreprise/offre/edit/:id', {
			templateUrl: './components/entreprise/offre/offre-edit.html',
			controller: 'EntrepriseOffreEditCtrl',
			css: './components/entreprise/offre/offre-edit.css',
		})
		.when('/entreprise/offre/add', {
			templateUrl: './components/entreprise/offre/offre-edit.html',
			controller: 'EntrepriseOffreEditCtrl',
			css: './components/entreprise/offre/offre-edit.css',
		})
		
			/*.when('/personne/:id', {
			templateUrl: 'personne.html',
			controller: 'PersonneCtrl as personneCtrl',
			resolve: {
                async: function ($route, PersonneService) {
                    return PersonneService.fetchPersonneById($route.current.params.id);
               	}
            }	
		})*/
		.when('/', {
			template: 'acuueil...',
		})
	}]);