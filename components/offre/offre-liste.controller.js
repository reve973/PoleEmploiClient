(function () {
    'use strict';

    var app = angular.module('mainApp');           

    app.controller("OffreListCtrl", ['$scope', 'offreService', function($scope, offreService){

        // SORT LIST VALUE
        $scope.selectSortColumn = [{column: 'dtParution', title: 'Publication'},
                                   {column: 'titre', title: 'Titre'}];      
        $scope.selectSortOrder  = [{id: 'asc', title: 'Croissant'},
                                   {id: 'dsc', title: 'Décroissant'}];
        // SEARCH CRITERIA
        $scope.searchCDD       = false;
        $scope.searchCDI       = false;
        $scope.searchCDDI      = false;
        $scope.searchKeyword   = '';
        $scope.searchCommune   = '';

        // SEARCH SETUP
        $scope.searchPage      = 0;
        $scope.searchSize      = 5;
        $scope.sortOrder       = $scope.selectSortOrder[1];
        $scope.sortColumn      = $scope.selectSortColumn[0];
    
        // OFFRE RESULT
        $scope.page = null;


        $scope.needResetPage   = false;
      
        // doSearch
        $scope.doSearch = function() {
            console.log('do search:' + $scope.sortColumn + ' - ' + $scope.sortOrder);
            if ($scope.needResetPage) {
                $scope.searchPage = 0;
                $scope.needResetPage = false;
            }

            offreService.findAll($scope.searchPage, 
                                $scope.searchSize, 
                                $scope.sortColumn.column, 
                                $scope.sortOrder.id, 
                                $scope.searchKeyword, 
                                $scope.searchCommune, 
                                $scope.searchCDD, 
                                $scope.searchCDDI, 
                                $scope.searchCDI, 
                                $scope.callBackOffre);
        }

        // callBack
        $scope.callBackOffre = function (page) {                
            $scope.page = page;

            console.log(page);
        }
        
        // searchCriteriaUpdated
        $scope.searchCriteriaUpdated = function() {
            $scope.needResetPage = true;
        }

        // updateSearch
        $scope.updateSearch = function() {
            $scope.needResetPage = true;
            $scope.doSearch();
        }

        $scope.doSearch();        
            $scope.$on("EVENT_PAGINATION_GO_TO_PAGE", function(evt, value) {
            evt.stopPropagation();            
            $scope.searchPage = value;
            $scope.doSearch();
        });
        
    }]);
})();
         


