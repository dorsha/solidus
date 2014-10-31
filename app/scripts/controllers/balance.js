'use strict';

angular.module('solidusApp')
    .controller('BalanceCtrl', function ($scope, $rootScope) {

        $scope.periodOptions = [
            { id: 'month', title: $scope.appmessages.balanceDateMonthly },
            { id: 'quarter', title: $scope.appmessages.balanceQuarter },
            { id: 'year', title: $scope.appmessages.balanceYear },
            { id: 'twoYears', title: $scope.appmessages.balanceTwoYears }
        ];

        $rootScope.selectedPeriodId = $scope.periodOptions[2].id;

        $scope.periodSelected = function(period) {
            $rootScope.selectedPeriodId = period.id;
        };

        if (!$rootScope.periodSliderValues) {
            $rootScope.periodSliderValues = [-5, 5];
        }
    });
