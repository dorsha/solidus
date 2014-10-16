'use strict';

/**
 * @ngdoc function
 * @name solidusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the solidusApp
 */
angular.module('solidusApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
