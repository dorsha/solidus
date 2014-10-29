'use strict';

angular.module('solidusApp')
    .controller('InvestCtrl', function ($rootScope, $scope) {
        $scope.sections = [
            { id: 'amount', position: 0, passed: false, notificationTitle: $rootScope.appmessages.amountNotification },
            { id: 'fundCoin', position: 1, passed: false, notificationTitle: $rootScope.appmessages.fundCoinNotification },
            { id: 'fundGold', position: 2, passed: false, notificationTitle: $rootScope.appmessages.fundGoldNotification },
            { id: 'fundStock', position: 3, passed: false, notificationTitle: $rootScope.appmessages.fundStockNotification },
            { id: 'fundDebenture', position: 4, passed: false, notificationTitle: $rootScope.appmessages.fundDebentureNotification },
            { id: 'summary', position: 5, passed: false, notificationTitle: $rootScope.appmessages.summaryNotification }
        ];
        $scope.previousSection = $scope.sections[0];
        $scope.currentSection = $scope.sections[0];
        $scope.moveToNextSection = function(section) {
            if (!section.passed) {
                section.passed = true;
                $scope.previousSection = $scope.currentSection;
                var nextPosition = section.position + 1;
                if (nextPosition < $scope.sections.length) {
                    $scope.currentSection = $scope.sections[nextPosition];
                }
            }
        };

        $scope.getTotalFees = function () {
            $scope.totalMgmtFee = 0;
            $scope.totalCommission = 0;
            $scope.selectedFunds.forEach(function (fund) {
                $scope.totalMgmtFee += fund.mgmtFee / 1000 * $scope.amount;
                $scope.totalCommission += fund.commission / 1000 * $scope.amount;
            });
        };

        $scope.submit = function() {
            $rootScope.invested = true;
            $rootScope.selectedAmount = parseInt($scope.amount);
        };
    }).directive('scrollToSection', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            priority: 100,
            link: function(scope, element) {
                element.click(function() {
                    function animateToNextSection() {
                        var element = $('#' + scope.currentSection.id);
                        if (element.length) {
                            $('html, body').animate({
                                scrollTop: element.offset().top - 100
                            }, 750, 'easeOutExpo');
                        }
                    }

                    scope.$emit('showNotificationBar', {
                        title: scope.previousSection.notificationTitle,
                        duration: 2500
                    });

                    $timeout(function () {
                        scope.$apply(animateToNextSection);
                    }, 1500);
                });
            }
        };
    }]).directive('notificationBar', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div dir="rtl" class="notificationBar">{{notificationBarTitle}}</div>',
            link: function (scope, el) {
                function showNotificationBar(event, params) {
                    if (scope.showNotificationTimeout) {
                        $timeout.cancel(scope.showNotificationTimeout);
                    }

                    scope.notificationBarTitle = params.title || '';
                    scope.$digest();

                    el.width($('body').width());
                    el.animate({
                        top: 0
                    }, 400, 'easeOutExpo', function () {
                        scope.showNotificationTimeout = $timeout(function () {
                            el.animate({
                                top: -100
                            },
                            300,
                            'easeInExpo',
                            function () {
                                if (params.onCollapsed) {
                                    params.onCollapsed();
                                }
                                scope.showNotificationTimeout = null;
                            });
                        }, params.duration || 300);
                    });
                }

                scope.$on('showNotificationBar', showNotificationBar);
            }
        };
    }]).directive('fundView', [function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/fund-view.html',
            link: function (scope, el, attrs) {
                var fundType = attrs.fundType;

                scope.fund.selected = !!scope.fund.recommended;

                scope.toggleSelected = function () {
                    _.remove(scope.selectedFunds, scope.fund);

                    _.forEach(scope.funds[fundType], function (fund, key) {
                        if (fund.selected) {
                            _.remove(scope.selectedFunds, fund);
                            fund.selected = false;
                        }
                    });

                    scope.fund.selected = !scope.fund.selected;

                    if (scope.fund.selected) {
                        scope.selectedFunds.push(scope.fund);
                    }
                };

                scope.flipCard = function (event) {
                    event.stopPropagation();
                    el.find('.flipper').toggleClass('flipped');
                };
            }
        }
    }]);
