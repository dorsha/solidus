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
                if (section.id === $scope.sections[0].id) {
                    $rootScope.investMode = true;
                    // invest toolbar
                    $rootScope.toolbarItems = [
                        { id: 'fundCoin', title: $rootScope.appmessages.fundCoinToolbarItem, passed: false },
                        { id: 'fundGold', title: $rootScope.appmessages.fundGoldToolbarItem, passed: false },
                        { id: 'fundStock', title: $rootScope.appmessages.fundStockToolbarItem, passed: false },
                        { id: 'fundDebenture', title: $rootScope.appmessages.fundDebentureToolbarItem, passed: false }
                    ];
                }

                section.passed = true;
                $scope.previousSection = $scope.currentSection;
                var nextPosition = section.position + 1;
                if (nextPosition < $scope.sections.length) {
                    $scope.currentSection = $scope.sections[nextPosition];
                }
            }

            if (_.every($rootScope.toolbarItems, { 'passed': true })) {
                $rootScope.selected = { id: 'dummy', title: '', passed: true };
            } else {
                if (section.id !== $scope.sections[5].id) {
                    if (section.position > 0) {
                        $rootScope.toolbarItems[section.position - 1].passed = true;
                    }
                    $rootScope.selected = _.find($rootScope.toolbarItems, function(item) {
                        return !item.passed;
                    });
                }
            }
        };

        $rootScope.investToolbarClick = function (item) {
            $scope.scrollToElement(item.id);
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
            $rootScope.investMode = false;
            $rootScope.revertToolbar();
        };

        $scope.scrollToElement = function (elementId) {
            var element = $('#' + elementId);
            if (element.length) {
                $('html, body').animate({
                    scrollTop: element.offset().top - 100
                }, 750, 'easeOutExpo');
            }
        };

        $scope.scrollTo = function ($timeout) {
            function animateToNextSection() {
                $scope.scrollToElement($scope.currentSection.id);
            }

            $scope.$emit('showNotificationBar', {
                title: $scope.previousSection.notificationTitle,
                duration: 2500
            });

            $timeout(function () {
                $scope.$apply(animateToNextSection);
            }, 1500);
        }

    }).directive('scrollToSection', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            priority: 100,
            link: function(scope, element) {
                element.click(function() {
                    scope.scrollTo($timeout);
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

                    _.forEach(scope.funds[fundType], function (fund) {
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
        };
    }]).directive('progressButton', ['$timeout', function ($timeout) {
        return {
            restrict : 'AE',
            replace : true,
            template : '<button data-style="shrink" data-horizontal class="progress-button btn btn-primary btn-centered btn-lg lastBtn" data-vx-common-prevent-default="">מאשר רכישה</button>',
            link : function (scope, el) {
                new ProgressButton(el.get(0), {
                    callback : function (instance) {
                        var progress = 0;
                        var interval = setInterval(function () {
                            progress = Math.min(progress + Math.random() * 0.16, 1);
                            instance._setProgress(progress);

                            if (progress === 1) {
                                instance._stop(1);
                                clearInterval(interval);

                                setTimeout(function () {
                                    scope.submit();
                                    scope.moveToNextSection(scope.sections[5]);
                                    scope.scrollTo($timeout);
                                    scope.itemSelected(scope.toolbarItems[1]);
                                    window.location.href = '/#/' + scope.toolbarItems[1].id;
                                }, 100);
                            }
                        }, 200);
                    }
                });
            }
        };
    }]);
