'use strict';

angular.module('solidusApp')
    .controller('TrackCtrl', function ($scope, $rootScope) {

        function getPieChart() {

            function onPlotClick(plot) {
                $scope.selectedFundName = plot.name;
                $scope.selectedFundType = plot.type;
                $scope.selectedFundY = plot.y;
                $scope.moneyValue = plot.moneyValue.toLocaleString();
                $scope.costValue = plot.costValue.toLocaleString();
                $scope.changedValuePercentage = plot.changedValuePercentage;
                $scope.changedValueCash = plot.changedValueCash.toLocaleString();
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
                            name: $scope.selectedFunds[0].name,
                            type: $rootScope.appmessages.fundCoinSectionHeader,
                            id: 'fundCoin',
                            y: $scope.selectedFunds[0].y,
                            moneyValue: $scope.selectedFunds[0].moneyValue,
                            costValue: $scope.selectedFunds[0].costValue,
                            changedValuePercentage: $scope.selectedFunds[0].changedValuePercentage,
                            changedValueCash: $scope.selectedFunds[0].changedValueCash,
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
                            type: $rootScope.appmessages.fundGoldSectionHeader,
                            id: 'fundGold',
                            y: $scope.selectedFunds[1].y,
                            moneyValue: $scope.selectedFunds[1].moneyValue,
                            costValue: $scope.selectedFunds[1].costValue,
                            changedValuePercentage: $scope.selectedFunds[1].changedValuePercentage,
                            changedValueCash: $scope.selectedFunds[1].changedValueCash,
                            direction: $scope.selectedFunds[1].direction,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $scope.selectedFunds[2].name,
                            type: $rootScope.appmessages.fundStockSectionHeader,
                            id: 'fundStock',
                            y: $scope.selectedFunds[2].y,
                            moneyValue: $scope.selectedFunds[2].moneyValue,
                            costValue: $scope.selectedFunds[2].costValue,
                            changedValuePercentage: $scope.selectedFunds[2].changedValuePercentage,
                            changedValueCash: $scope.selectedFunds[2].changedValueCash,
                            direction: $scope.selectedFunds[2].direction,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $scope.selectedFunds[3].name,
                            type: $rootScope.appmessages.fundDebentureSectionHeader,
                            id: 'fundDebenture',
                            y: $scope.selectedFunds[3].y,
                            moneyValue: $scope.selectedFunds[3].moneyValue,
                            costValue: $scope.selectedFunds[3].costValue,
                            changedValuePercentage: $scope.selectedFunds[3].changedValuePercentage,
                            changedValueCash: $scope.selectedFunds[3].changedValueCash,
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

        // initial fund details (always the coin fund)
        $scope.selectedFundName = $scope.selectedFunds[0].name;
        $scope.selectedFundType = $rootScope.appmessages.fundCoinSectionHeader;
        $scope.selectedFundY = $scope.selectedFunds[0].y;
        $scope.moneyValue = $scope.selectedFunds[0].moneyValue.toLocaleString();
        $scope.costValue = $scope.selectedFunds[0].costValue.toLocaleString();
        $scope.changedValuePercentage = $scope.selectedFunds[0].changedValuePercentage;
        $scope.changedValueCash = $scope.selectedFunds[0].changedValueCash.toLocaleString();
        $scope.direction = $scope.selectedFunds[0].direction;

        // calculate total values
        $scope.totalProfitCash = 0;
        $scope.selectedFunds.forEach(function (fund) {
            if (fund.direction === '+') {
                $scope.totalProfitCash += fund.changedValueCash;
            } else {
                $scope.totalProfitCash -= fund.changedValueCash;
            }
        });

        $scope.totalPortfolioCash = 0;
        $scope.selectedFunds.forEach(function (fund) {
            $scope.totalPortfolioCash += fund.moneyValue;
        });

        // format total values
        $scope.totalProfitPercentage = '%.2f'.format($scope.totalProfitCash / $rootScope.amount * 100);
        $scope.totalProfitCash = $scope.totalProfitCash.toLocaleString();
        $scope.totalPortfolioCash = $scope.totalPortfolioCash.toLocaleString();

        $scope.pie = getPieChart();

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
