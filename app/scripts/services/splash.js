'use strict';

angular.module('solidusApp').service('$splash', [
    '$modal',
    '$rootScope',
    function($modal, $rootScope) {
        return {
            open: function (attrs, opts) {
                var scope = $rootScope.$new();
                angular.extend(scope, attrs);
                opts = angular.extend(opts || {}, {
                    backdrop: false,
                    scope: scope,
                    templateUrl: 'views/splash-view-content.html',
                    windowTemplateUrl: 'views/splash-view.html'
                });
                return $modal.open(opts);
            }
        };
    }
]);