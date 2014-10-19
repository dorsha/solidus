'use strict';

angular.module('solidusApp')
    .controller('InvestCtrl', function ($scope) {
        $scope.sections = [
            { id: 'amount', position: 0, passed: false },
            { id: 'fundCoin', position: 1, passed: false },
            { id: 'fundGold', position: 2, passed: false },
            { id: 'fundStock', position: 3, passed: false },
            { id: 'fundDebenture', position: 4, passed: false },
            { id: 'summary', position: 5, passed: false }
        ];
        $scope.currentSection = $scope.sections[0];
        $scope.moveToNextSection = function(section) {
            if (!section.passed) {
                section.passed = true;
                var nextPosition = section.position + 1;
                if (nextPosition < $scope.sections.length) {
                    $scope.currentSection = $scope.sections[nextPosition];
                }
            }
        };
    }).directive('scrollToSection', function() {
        return {
            restrict: 'A',
            priority: 100,
            link: function(scope, element, attrs) {
                element.click(function() {
                    scope.$apply(function() {
                        var element = $('#' + scope.currentSection.id);
                        if (element.length) {
                            $('html, body').animate({
                                scrollTop: element.offset().top - 140
                            }, 1000);
                        }
                    });
                });
            }
        };
    });
