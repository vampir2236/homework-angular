/*global angular, Firebase*/
(function () {
    'use strict';

    angular.module('shop')
        .controller('ContactsCtrl', ['$rootScope', '$scope', '$firebase', 'firebaseUrl',
            function ($rootScope, $scope, $firebase, firebaseUrl) {
                $rootScope.activeMenuItem = 'contacts';

                var ref = new Firebase(firebaseUrl+'/contacts');
                var sync = $firebase(ref);

                $scope.contacts = sync.$asObject();

            }]);
})();