(function () {
    'use strict';

    var app = angular.module('mainApp');

    // EVENT
    app.constant('EVENT_LOGIN_SUCCESS', 'EVENT_LOGIN_SUCCESS');
    app.constant('EVENT_LOGOUT_SUCCESS', 'EVENT_LOGOUT_SUCCESS');

    // URL
    app.constant('URL_API', 'http://localhost:8081/api');               
})();
         