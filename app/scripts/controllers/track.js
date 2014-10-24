'use strict';

angular.module('solidusApp')
    .controller('TrackCtrl', function ($scope, $rootScope) {

        function getPieChart() {

            function onPlotClick(plot) {
                $scope.selectedFundName = plot.name;
                $scope.selectedFundType = plot.type;
                $scope.selectedFundY = plot.y;
                $scope.moneyValue = plot.moneyValue;
                $scope.costValue = plot.costValue;
                $scope.changedValuePercentage = plot.changedValuePercentage;
                $scope.changedValueCash = plot.changedValueCash;
                $scope.direction = plot.direction;
                $scope.$apply();
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
                            name: $rootScope.appmessages.fundCoinName,
                            type: $rootScope.appmessages.fundCoinSectionHeader,
                            id: 'fundCoin',
                            y: 24.85,
                            moneyValue: 25900,
                            costValue: 136.23,
                            changedValuePercentage: 3.6,
                            changedValueCash: 900,
                            direction: '+',
                            sliced: true,
                            selected: true,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.appmessages.fundGoldName,
                            type: $rootScope.appmessages.fundGoldSectionHeader,
                            id: 'fundGold',
                            y: 23.03,
                            moneyValue: 24000,
                            costValue: 157.61,
                            changedValuePercentage: 4,
                            changedValueCash: 1000,
                            direction: '-',
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.appmessages.fundStockName,
                            type: $rootScope.appmessages.fundStockSectionHeader,
                            id: 'fundStock',
                            y: 26.77,
                            moneyValue: 27900,
                            costValue: 115.91,
                            changedValuePercentage: 11.6,
                            changedValueCash: 2900,
                            direction: '+',
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.appmessages.fundDebentureName,
                            type: $rootScope.appmessages.fundDebentureSectionHeader,
                            id: 'fundDebenture',
                            y: 25.33,
                            moneyValue: 26400,
                            costValue: 185.56,
                            changedValuePercentage: 5.6,
                            changedValueCash: 1400,
                            direction: '+',
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

        $scope.selectedFundName = $rootScope.appmessages.fundCoinName;
        $scope.selectedFundType = $rootScope.appmessages.fundCoinSectionHeader;
        $scope.selectedFundY = 24.8;
        $scope.moneyValue = 25900;
        $scope.costValue = 136.23;
        $scope.changedValuePercentage = 3.6;
        $scope.changedValueCash = 900;
        $scope.direction = '+';

        $scope.totalProfitPercentage = 4.2;
        $scope.totalProfitCash = 4200;
        $scope.totalPortfolioCash = 104200;

        $scope.pie = getPieChart();
        var d = new Date();
        $scope.currentDate = d.getDate() + "." + d.getMonth() + "." + d.getFullYear();
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
