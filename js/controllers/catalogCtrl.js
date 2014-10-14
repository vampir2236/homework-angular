/*global angular, Firebase*/
(function () {
    'use strict';

    angular.module('shop')
        .controller('CatalogCtrl', ['$rootScope', '$scope', '$firebase', 'firebaseUrl', '$location',
            function ($rootScope, $scope, $firebase, firebaseUrl, $location) {

                var ref = new Firebase(firebaseUrl + '/catalog');
                var sync = $firebase(ref);

                $scope.catalog = sync.$asArray();

                $rootScope.activeMenuItem = 'catalog';

                /*добавление*/
                $scope.addItem = function () {
                    $scope.catalog.$add($scope.newItem);
                };

                /*редактирование*/
                $scope.editItem = function (index, item) {
                    $scope.isEditing = true;
                    $scope.currIndex = index;
                    $scope.currItem = angular.copy(item);
                    $scope.item = item;
                };

                /*сохранение после редактирования*/
                $scope.saveItem = function () {
                    $scope.isEditing = false;
                    angular.extend($scope.item, $scope.currItem);
                    $scope.catalog.$save($scope.item);
                };

                /*отмена изменений*/
                $scope.cancelItem = function (item, catalog) {
                    $scope.isEditing = false;
                    $scope.currItem = null;
                };

                /*удаление*/
                $scope.removeItem = function (index, item) {
                    $scope.catalog.$remove(item);
                };

                $scope.orderByField = 'name';
                
                /*сортировка*/
                $scope.sortBy = function (field) {
                    if ($scope.orderByField === field) {
                        $scope.reverseSort = !$scope.reverseSort;
                        if ($scope.reverseSort) {
                            $scope.reverseSortString = 'reverse';
                        } else {
                            $scope.reverseSortString = '';
                        }
                    } else {
                        $scope.reverseSort = false;
                    }

                    $scope.orderByField = field;
                };
            }]);
})();