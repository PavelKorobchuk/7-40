'use strict'
var myApp = angular.module('PassManager', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'mainController',
                templateUrl: 'views/mainPage.html'
            })
            .when('/passList', {
                controller: 'passListController',
                templateUrl: 'views/passList.html'
            })
            .otherwise({
                redirectTo:'/'
            })
    });