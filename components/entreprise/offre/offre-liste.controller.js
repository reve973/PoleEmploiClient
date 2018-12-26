(function () {
    'use strict';

    var app = angular.module('mainApp');           

    app.controller("EntrepriseOffreListCtrl", ['$scope', '$injector', function($scope, $injector){

        // SEARCH SETUP
        $scope.searchPage      = 0;
        $scope.searchSize      = 5;
        $scope.sortOrder       = 'dsc';
        $scope.sortColumn      = 'dtParution';
    
        // OFFRE RESULT
        $scope.page = null;

        // doSearch
        $scope.doSearch = function() {
            console.log('do search:' + $scope.sortColumn + ' - ' + $scope.sortOrder);
            offreService.findAllByEntreprise(loginService.getAuthenticatedEntreprise().id,
                                                            $scope.searchPage, 
                                                            $scope.searchSize, 
                                                            $scope.sortColumn, 
                                                            $scope.sortOrder, 
                                                            '',
                                                            '', 
                                                            false, 
                                                            false, 
                                                            false)
            .then(function(res) {
                $scope.page = res;
            },
            function(error) {
                page = null;
            });                         
        }

        // callBack
        /*$scope.callBackOffre = function (page) {                
            $scope.page = page;
            console.log('==>'+page);
        }*/
        
        // setSortColumn
        $scope.setSortColumn = function(column) {
            if (this.sortColumn === column) {
              this.sortOrder = this.sortOrder === 'asc' ? 'dsc' : 'asc';
            } else {
              this.sortColumn = column;
              this.sortOrder = 'asc';
            }
            this.doSearch();
          }
        
        // Edit
        $scope.edit = function(offre) {
        //this.router.navigate(['/entreprises/offres/edit/' + offre.id]);
        }

        var loginService = $injector.get('loginService');
        var offreService = $injector.get('offreService');        
        $scope.doSearch();        
        $scope.$on("EVENT_PAGINATION_GO_TO_PAGE", function(evt, value) {
            evt.stopPropagation();            
            $scope.searchPage = value;
            $scope.doSearch();
        });
        
    }]);
})();
         


