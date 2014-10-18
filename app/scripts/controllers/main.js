'use strict';

angular.module('solidusApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $rootScope.appmessages = [];
    $rootScope.appmessages.investHeader = "השקעה";
    $rootScope.appmessages.trackHeader = "מעקב";
    $rootScope.appmessages.balance = "איזון";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
