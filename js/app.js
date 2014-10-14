/*global angular*/
(function () {
    'use strict';

    angular.module('shop', ['ngRoute', 'firebase']);

    angular.module('shop')
        .config(['$routeProvider', '$locationProvider',
            function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl'
                    })
                    .when('/catalog/create', {
                        templateUrl: 'views/edit.catalog.html',
                        controller: 'CatalogCtrl'
                    })
                    .when('/catalog/edit', {
                        templateUrl: 'views/edit.catalog.html',
                        controller: 'CatalogCtrl'
                    })
                    .when('/catalog', {
                        templateUrl: 'views/catalog.html',
                        controller: 'CatalogCtrl'
                    })
                    .when('/contacts', {
                        templateUrl: 'views/contacts.html',
                        controller: 'ContactsCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });

                $locationProvider.html5Mode(false).hashPrefix('!');
            }])
        .value('firebaseUrl', 'https://crackling-fire-5397.firebaseio.com/');
})();