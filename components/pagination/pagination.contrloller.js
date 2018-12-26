(function () {
    'use strict';

    var app = angular.module('mainApp');           

    app.controller("PaginationCtrl", ['$scope', function($scope) {
        $scope.goToPage = function(num) {
            $scope.$emit("EVENT_PAGINATION_GO_TO_PAGE", num);     
        }
                      
    }]);
})();
         


