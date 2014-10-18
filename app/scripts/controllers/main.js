'use strict';

angular.module('solidusApp')
    .controller('MainCtrl', function ($scope, $rootScope) {

        // App labels
        $rootScope.appmessages = [];
        $rootScope.appmessages.investHeader = 'השקעה';
        $rootScope.appmessages.trackHeader = 'מעקב';
        $rootScope.appmessages.balance = 'איזון';

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
