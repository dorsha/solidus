'use strict';

angular.module('solidusApp')
    .controller('TrackCtrl', function ($scope, $rootScope) {

        function getPieChart() {

            function onPlotClick(plot) {
                $scope.selectedFundName = plot.name;
                $scope.selectedFundY = plot.y;
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
                    text: $rootScope.appmessages.pieChartTitle + new Date().toLocaleDateString('he')
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                        name: $rootScope.appmessages.piePlotName,
                    data: [
                        {
                            name: $rootScope.appmessages.fundCoinSectionHeader,
                            id: 'fundCoin',
                            y: 26.2,
                            sliced: true,
                            selected: true,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.appmessages.fundGoldSectionHeader,
                            id: 'fundGold',
                            y: 18.8,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.appmessages.fundStockSectionHeader,
                            id: 'fundStock',
                            y: 28.3,
                            events: {
                                click: function() {
                                    onPlotClick(this);
                                }
                            }
                        },
                        {
                            name: $rootScope.appmessages.fundDebentureSectionHeader,
                            id: 'fundDebenture',
                            y: 26.7,
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

        $scope.selectedFundName = $rootScope.appmessages.fundCoinSectionHeader;
        $scope.selectedFundY = 26.2;
        $scope.pie = getPieChart();
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
