/*global angular*/
(function () {
    'use strict';

    angular.module('shop')
        .controller('HomeCtrl', ['$rootScope', '$scope',
            function ($rootScope, $scope) {
                $rootScope.activeMenuItem = 'home';

            }]);
})();