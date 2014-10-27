'use strict';

/**
 * @ngdoc overview
 * @name solidusApp
 * @description
 * # solidusApp
 *
 * Main module of the application.
 */
angular
    .module('solidusApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.slider'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/invest.html',
                controller: 'MainCtrl'
            })
            .when('/invest', {
                templateUrl: 'views/invest.html',
                controller: 'InvestCtrl'
            })
            .when('/track', {
                templateUrl: 'views/track.html',
                controller: 'TrackCtrl'
            })
            .when('/balance', {
                templateUrl: 'views/balance.html',
                controller: 'BalanceCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
