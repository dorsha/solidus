'use strict';

angular.module('solidusApp')
    .controller('TrackCtrl', function ($scope, $rootScope) {

        function fundToPlotDetails(fund) {
            var quarterAmount = $rootScope.selectedAmount / 4;
            $scope.selectedFundName = fund.name;
            $scope.selectedFundType = fund.type;
            $scope.selectedFundY = '%.2f'.format(getPlotY(fund.changedValuePercentage));
            $scope.changedValuePercentage = fund.changedValuePercentage;
            $scope.changedValueCash = ($scope.changedValuePercentage / 100) * quarterAmount;
            $scope.direction = fund.direction;

            if ($scope.direction === '+') {
                $scope.moneyValue = $rootScope.formatNumberRgx(parseFloat('%.2f'.format((quarterAmount + $scope.changedValueCash))));
            } else {
                $scope.moneyValue = $rootScope.formatNumberRgx(parseFloat('%.2f'.format((quarterAmount - $scope.changedValueCash))));
            }

            $scope.changedValueCash = $rootScope.formatNumberRgx(parseFloat('%.2f'.format($scope.changedValueCash)));
            $scope.costValue = $rootScope.formatNumberRgx(fund.costValue);
        }

        function getPlotY(changedValuePercentage) {
            var totalProfit = calculateTotalProfit();
            var totalMoneyValue = totalProfit + $rootScope.selectedAmount;
            var fundMoneyValue = ((changedValuePercentage / 100) + 1) * $rootScope.selectedAmount / 4;
            return (fundMoneyValue / totalMoneyValue) * 100;
        }

        function getPieChart() {

            function onPlotClick(plot) {
                fundToPlotDetails(plot);
                $scope.$apply();

                // scroll to fund's details on plot click - much better user experience
                $scope.scrollTo('fundDetailsContainer');
            }

            return {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: true
                },
                credits: false,
                exporting: { enabled: false },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        point: {
                            events: {
                                legendItemClick: function () {
                                    return false; // disable legend click
                                }
                            }
                        }
                    }
                },
                legend: {
                    rtl: true
                },
                series: [{
                    type: 'pie',
                        name: $rootScope.appmessages.piePlotName,
                    data: [
                        {
                            name: $scope.selectedFunds[0].name,
                            type: $scope.selectedFunds[0].type,
                            id: 'fundCoin',
                            y: getPlotY($scope.selectedFunds[0].changedValuePercentage),
                            costValue: $scope.selectedFunds[0].costValue,
                            changedValuePercentage: $scope.selectedFunds[0].changedValuePercentage,
                            direction: $scope.selectedFunds[0].direction,
                            sliced: true,
                            selected: true,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $scope.selectedFunds[1].name,
                            type: $scope.selectedFunds[1].type,
                            id: 'fundGold',
                            y: getPlotY(1),
                            costValue: $scope.selectedFunds[1].costValue,
                            changedValuePercentage: $scope.selectedFunds[1].changedValuePercentage,
                            direction: $scope.selectedFunds[1].direction,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $scope.selectedFunds[2].name,
                            type: $scope.selectedFunds[2].type,
                            id: 'fundStock',
                            y: getPlotY(2),
                            costValue: $scope.selectedFunds[2].costValue,
                            changedValuePercentage: $scope.selectedFunds[2].changedValuePercentage,
                            direction: $scope.selectedFunds[2].direction,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $scope.selectedFunds[3].name,
                            type: $scope.selectedFunds[3].type,
                            id: 'fundDebenture',
                            y: getPlotY(3),
                            costValue: $scope.selectedFunds[3].costValue,
                            changedValuePercentage: $scope.selectedFunds[3].changedValuePercentage,
                            direction: $scope.selectedFunds[3].direction,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        }
                    ]
                }]
            };
        }

        function calculateTotalProfit() {
            var totalProfit = 0;
            $scope.selectedFunds.forEach(function (fund) {
                if (fund.direction === '+') {
                    totalProfit += ((fund.changedValuePercentage / 100) * $rootScope.selectedAmount / 4);
                } else {
                    totalProfit -= ((fund.changedValuePercentage / 100) * $rootScope.selectedAmount / 4);
                }
            });

            return totalProfit;
        }

        function init() {
            // initial fund details (always the coin fund)
            fundToPlotDetails($scope.selectedFunds[0]);
            $scope.totalProfitCash = calculateTotalProfit();

            // format total values
            $scope.totalProfitPercentage = '%.2f'.format(($scope.totalProfitCash / $rootScope.selectedAmount) * 100);
            $scope.totalPortfolioCash = $rootScope.formatNumberRgx(parseFloat('%.2f'.format(($scope.totalProfitCash + $rootScope.selectedAmount))));
            $scope.totalProfitUp = $scope.totalProfitCash >= 0;
            $scope.totalProfitCash = $rootScope.formatNumberRgx(parseFloat('%.2f'.format($scope.totalProfitCash)));

            $scope.pie = getPieChart();
        }

        if ($rootScope.invested) {
            init();
        }

        // set the date
        var d = new Date();
        var month = d.getMonth() + 1;
        $scope.currentDate = d.getDate() + '.' + month + '.' + d.getFullYear();
    }).directive('highchart', [function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<div></div>',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.chart, function() {
                    if (!attrs.chart) {
                        return;
                    }
                    var chart = scope.$eval(attrs.chart);
                    angular.element(element).highcharts(chart);
                });
            }
        };
    }]);
