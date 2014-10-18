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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .when('/track', {
        templateUrl: 'views/track.html',
        controller: 'TrackCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
