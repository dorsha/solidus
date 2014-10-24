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
                            name: $rootScope.consts.fundsCoin.fundCoinSelected.name,
                            type: $rootScope.appmessages.fundCoinSectionHeader,
                            id: 'fundCoin',
                            y: $rootScope.consts.fundsCoin.fundCoinSelected.y,
                            moneyValue: $rootScope.consts.fundsCoin.fundCoinSelected.moneyValue,
                            costValue: $rootScope.consts.fundsCoin.fundCoinSelected.costValue,
                            changedValuePercentage: $rootScope.consts.fundsCoin.fundCoinSelected.changedValuePercentage,
                            changedValueCash: $rootScope.consts.fundsCoin.fundCoinSelected.changedValueCash,
                            direction: $rootScope.consts.fundsCoin.fundCoinSelected.direction,
                            sliced: true,
                            selected: true,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.consts.fundsGold.fundGoldSelected.name,
                            type: $rootScope.appmessages.fundGoldSectionHeader,
                            id: 'fundGold',
                            y: $rootScope.consts.fundsGold.fundGoldSelected.y,
                            moneyValue: $rootScope.consts.fundsGold.fundGoldSelected.moneyValue,
                            costValue: $rootScope.consts.fundsGold.fundGoldSelected.costValue,
                            changedValuePercentage: $rootScope.consts.fundsGold.fundGoldSelected.changedValuePercentage,
                            changedValueCash: $rootScope.consts.fundsGold.fundGoldSelected.changedValueCash,
                            direction: $rootScope.consts.fundsGold.fundGoldSelected.direction,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.consts.fundsStock.fundStockSelected.name,
                            type: $rootScope.appmessages.fundStockSectionHeader,
                            id: 'fundStock',
                            y: $rootScope.consts.fundsStock.fundStockSelected.y,
                            moneyValue: $rootScope.consts.fundsStock.fundStockSelected.moneyValue,
                            costValue: $rootScope.consts.fundsStock.fundStockSelected.costValue,
                            changedValuePercentage: $rootScope.consts.fundsStock.fundStockSelected.changedValuePercentage,
                            changedValueCash: $rootScope.consts.fundsStock.fundStockSelected.changedValueCash,
                            direction: $rootScope.consts.fundsStock.fundStockSelected.direction,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.consts.fundsDebenture.fundDebentureSelected.name,
                            type: $rootScope.appmessages.fundDebentureSectionHeader,
                            id: 'fundDebenture',
                            y: $rootScope.consts.fundsDebenture.fundDebentureSelected.y,
                            moneyValue: $rootScope.consts.fundsDebenture.fundDebentureSelected.moneyValue,
                            costValue: $rootScope.consts.fundsDebenture.fundDebentureSelected.costValue,
                            changedValuePercentage: $rootScope.consts.fundsDebenture.fundDebentureSelected.changedValuePercentage,
                            changedValueCash: $rootScope.consts.fundsDebenture.fundDebentureSelected.changedValueCash,
                            direction: $rootScope.consts.fundsDebenture.fundDebentureSelected.direction,
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

        $scope.selectedFundName = $rootScope.consts.fundsCoin.fundCoinSelected.name;
        $scope.selectedFundType = $rootScope.appmessages.fundCoinSectionHeader;
        $scope.selectedFundY = $rootScope.consts.fundsCoin.fundCoinSelected.y;
        $scope.moneyValue = $rootScope.consts.fundsCoin.fundCoinSelected.moneyValue.toLocaleString();
        $scope.costValue = $rootScope.consts.fundsCoin.fundCoinSelected.costValue.toLocaleString();
        $scope.changedValuePercentage = $rootScope.consts.fundsCoin.fundCoinSelected.changedValuePercentage;
        $scope.changedValueCash = $rootScope.consts.fundsCoin.fundCoinSelected.changedValueCash.toLocaleString();
        $scope.direction = $rootScope.consts.fundsCoin.fundCoinSelected.direction;

        $scope.totalProfitPercentage = $rootScope.consts.totalProfitPercentage;
        $scope.totalProfitCash = $rootScope.consts.totalProfitCash.toLocaleString();
        $scope.totalPortfolioCash = $rootScope.consts.totalPortfolioCash.toLocaleString();

        $scope.pie = getPieChart();
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
