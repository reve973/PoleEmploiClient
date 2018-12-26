(function () {
    'use strict';

    var app = angular.module('mainApp');           

    app.controller("LoginCtrl", ['$scope', '$uibModalInstance', 'loginService', function($scope, $uibModalInstance, loginService){
        $scope.identifiant = '';
        $scope.password = '';
        $scope.loginError = false;

        // Connect
        $scope.connect = function () {
            $scope.loginError = false;
            loginService.login($scope.identifiant, $scope.password, $scope.callBackLogin);
        }
    
        // Cancel
        $scope.cancel = function () {
            $uibModalInstance.dismiss();			
        }
    
        // CallBack
        $scope.callBackLogin = function (res) {
            if (res) {
                $uibModalInstance.close();				
                // $rootScope.$emit(EVENT_LOGIN_SUCCESS);
            } else {
                $scope.loginError = true;
            }
        }
    }]);
    
})();
         


