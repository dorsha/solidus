'use strict';

angular.module('solidusApp')
.factory('BankService', ['$http', function ($http) {
        var SECRET = '8FiR7YjaISM9ckzvEHSP6NvGo/G/eRtz5HcXOPPs';
        var APP_ID = 'AKIAJ2NWUPFJS4OSMPRA';
        var self = {};

        self.getTotalCash = function (onSuccess, onError) {
            $http.get('https://api.bankapp.co.il/api/account/200004/balance', {
                headers: {
                    'accessKey': APP_ID,
                    'secretKey': SECRET
                },
                withCredentials: true
            }).then(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                onSuccess && onSuccess(data, status);
            },
            function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                onError && onError(data, status);
            });
        };

        return self;
    }]);