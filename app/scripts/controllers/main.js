'use strict';

angular.module('solidusApp')
    .controller('MainCtrl', function ($scope, $rootScope) {

        // App labels
        $rootScope.appmessages = {
            investHeader: "השקעה",
            trackHeader: "מעקב",
            balance: "איזון",
            welcome: "שלום משה, בחר סכום להשקעה:"
        };

        $scope.amount = 0;
        $scope.totalCash = 123456;
        
        $scope.toolbarItems = [
            { id: 'invest', title: $rootScope.appmessages.investHeader },
            { id: 'track', title: $rootScope.appmessages.trackHeader },
            { id: 'balance', title: $rootScope.appmessages.balance }
        ];
        $scope.selected = $scope.toolbarItems[0];
        $scope.itemSelected = function(item) {
            $scope.selected = item;
        }
    });
