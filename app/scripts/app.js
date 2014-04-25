'use strict';

angular.module('websiteFrontendApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'services.Projects',
    'API',
    'services.Contact'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });
