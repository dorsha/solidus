'use strict';

angular.module('solidusApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $rootScope.appmessages = {
      investHeader: "השקעה",
      trackHeader: "מעקב",
      balance: "איזון",
      welcome: "שלום משה, בחר סכום להשקעה:"
    };

    $scope.amount = 0;
    $scope.totalCash = 123456;
  });
