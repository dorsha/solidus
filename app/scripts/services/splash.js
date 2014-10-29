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
                    templateUrl: 'splash/content.html',
                    windowTemplateUrl: 'splash/index.html'
                });
                return $modal.open(opts);
            }
        };
    }
])
    .run([
        '$templateCache',
        function ($templateCache) {
            $templateCache.put('splash/index.html',
                    '<section class="splash" ng-class="{\'splash-open\': animate}" ng-style="{\'z-index\': 1000, display: \'block\'}" ng-click="close($event)">' +
                    '  <div class="splash-inner" ng-transclude></div>' +
                    '</section>'
            );
            $templateCache.put('splash/content.html',
                    '<div class="splash-content text-center">' +
                    '  <div class="splashLogo"/>' +
                    '  <p class="lead" ng-bind="title"></p>' +
                    '  <button class="btn btn-primary btn-centered btn-lg" ng-bind="btnText || \'המשך לאתר\'" ng-click="$close()"></button>' +
                    '</div>'
            );
        }
    ]);