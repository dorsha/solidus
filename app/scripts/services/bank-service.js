'use strict';

angular.module('solidusApp')
.factory('BankService', ['$http', function ($http) {
        var SECRET = '8FiR7YjaISM9ckzvEHSP6NvGo/G/eRtz5HcXOPPs';
        var APP_ID = 'AKIAJ2NWUPFJS4OSMPRA';
        var self = {};
        var accountNumber = 200004;

        self.getTotalCash = function (onSuccess, onError) {
            $http.get('https://api.bankapp.co.il/real/' + accountNumber + '/balance', {
                headers: {
                    'accessKey': APP_ID,
                    'secretKey': SECRET
                },
                withCredentials: true
            }).then(function(response, status) {
                    // this callback will be called asynchronously
                    // when the response is available
                    if (onSuccess) {
                        onSuccess(response.data, status);
                    }
                },
                function(response, status) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    if (onError) {
                        onError(response.data, status);
                    }
                });
        };

        self.getUsername = function (onSuccess, onError) {
            $http.get('https://api.bankapp.co.il/real/' + accountNumber + '/details', {
                headers: {
                    'accessKey': APP_ID,
                    'secretKey': SECRET
                },
                withCredentials: true
            }).then(function(response, status) {
                    // this callback will be called asynchronously
                    // when the response is available
                    if (onSuccess) {
                        onSuccess(response.data, status);
                    }
                },
                function(response, status) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    if (onError) {
                        onError(response.data, status);
                    }
                });
        };

        return self;
    }]);