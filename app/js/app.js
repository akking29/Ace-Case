(function() {
    'use strict';

    var app = angular
        .module('app', ['ui.router'])

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: "/home",
            templateUrl: 'app/templates/home.html',
            controller: 'LineUpController as vm'

        });
    });
})();