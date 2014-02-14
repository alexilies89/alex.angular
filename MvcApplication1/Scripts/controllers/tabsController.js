var app = angular.module("singlePageApp", ['ngRoute']);

app.controller("tabsController", function ($scope) {
    $scope.message = "Ana are mere";
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: '/Static/Partials/home.html',
        controller: 'tabsController'
    });

    $routeProvider
    .when("/about", {
        templateUrl: '/Static/Partials/about.html',
        controller: 'tabsController'
    });

    $routeProvider
    .when("/message", {
        templateUrl: '/Static/Partials/home.html',
        controller: 'tabsController'
    });

    // NOTE: This part is very important
    //$locationProvider.html5Mode(true);
});