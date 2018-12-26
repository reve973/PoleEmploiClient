(function () {
    var app = angular.module('mainApp');           


    app.factory('tokenInterceptor', ['$q', '$injector',  function($q, $injector) {
        var $interceptor = {};

        $interceptor.request = function(config) { 
            var loginService = $injector.get('loginService');

            if (loginService.isAuthenticated()) {
                config.headers['Authorization'] = 'Bearer ' + loginService.getToken();
                //alert('add token');
            }

            return config; 
        }
            
        $interceptor.requestError = function(rejection) { 
            return $q.reject(rejection); 
        } 
    
        $interceptor.response = function(response) { 
            return response; 
        } 
    
        $interceptor.responseError = function(rejection) { 
            return $q.reject(rejection); 
        } 

        return $interceptor;
	}]);

    app.config(['$httpProvider', function($httpProvider) {  
        $httpProvider.interceptors.push('tokenInterceptor', '$injector');
    }]);    

})();





