'use strict';

/**
 * @ngdoc function
 * @name solidusApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the solidusApp
 */
angular.module('solidusApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
