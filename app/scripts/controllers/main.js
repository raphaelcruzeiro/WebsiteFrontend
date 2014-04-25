'use strict';

(function() {
    var module = angular.module('websiteFrontendApp');

    module.controller('MainCtrl', function($scope, $rootScope, ProjectService, ContactService) {
        $scope.formHasBeenPosted = false;

        ProjectService.getProjects().then(function(d) {
            $scope.projects = d;
        });

        $scope.sendContact = function() {
            $scope.formHasBeenPosted = true;
            if ($scope.contactForm.$valid) {
                $rootScope.$broadcast('show-loader');
                ContactService.send($scope.contact).then(function(d) {
                    $scope.formHasBeenPosted = false;
                    $rootScope.$broadcast('show-success');
                    $scope.contactForm.$setPristine();
                    $scope.contact = {
                        subject: null,
                        email: null,
                        message: null
                    }
                });
            }
        };

        $scope.isInvalid = function(field) {
            return !$scope.contactForm[field].$valid && ($scope.contactForm[field].$dirty || $scope.formHasBeenPosted);
        };
    });
})();
