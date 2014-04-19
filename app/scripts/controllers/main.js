'use strict';

(function() {
    var module = angular.module('websiteFrontendApp');

    module.controller('MainCtrl', function ($scope, ProjectService) {
        console.log('Loaded main');
        ProjectService.getProjects().then(function(d) {
            $scope.projects = d;
        });
    });
})();
