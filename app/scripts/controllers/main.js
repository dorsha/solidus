'use strict';

angular.module('solidusApp')
    .controller('MainCtrl', function ($scope, $rootScope) {

        $rootScope.consts = {
            // total portfolio values
            totalProfitPercentage: 4.2,
            totalProfitCash: 4200,
            totalPortfolioCash: 104200,
            totalPortfolioDirection: '+',

            // all available funds

            // funds coin
            fundsCoin: {
                fundCoinSelected : {
                    name : 'מגדל כספית פרימיום',
                    y : 24.85,
                    moneyValue : 25900,
                    costValue : 136.23,
                    changedValuePercentage : 3.6,
                    changedValueCash : 900,
                    direction : '+'
                }
            },

            // funds gold
            fundsGold: {
                fundGoldSelected : {
                    name : 'הראל סל זהב',
                    y : 23.03,
                    moneyValue : 24000,
                    costValue : 157.61,
                    changedValuePercentage : 4,
                    changedValueCash : 1000,
                    direction : '+'
                }
            },

            // funds stock
            fundsStock: {
                fundStockSelected : {
                    name : 'אנליסט מניות ממוקדת',
                    y : 26.77,
                    moneyValue : 27900,
                    costValue : 115.91,
                    changedValuePercentage : 11.6,
                    changedValueCash : 2900,
                    direction : '+'
                }
            },

            // funds debenture
            fundsDebenture: {
                fundDebentureSelected : {
                    name : 'אילים תיק אג"ח',
                    y : 25.33,
                    moneyValue : 26400,
                    costValue : 185.56,
                    changedValuePercentage : 5.6,
                    changedValueCash : 1400,
                    direction : '+'
                }
            }
        };

        // App labels
        $rootScope.appmessages = {
            nis: 'ש"ח',
            investHeader: 'השקעה',
            trackHeader: 'מעקב',
            balance: 'איזון',
            welcome: 'משה, בחר סכום להשקעה:',
            welcomeMorning: 'בוקר טוב',
            welcomeNoon: 'צהריים טובים',
            welcomeAfternoon: 'אחר הצהריים טובים',
            welcomeEvening: 'ערב טוב',
            welcomeNight: 'לילה טוב',
            submitAmountSection: 'בוא נשקיע',
            submitFundCoinSection: 'בוא נמשיך',
            submitFundGoldSection: 'בוא נמשיך',
            submitFundStockSection: 'בוא נמשיך',
            submitFundDebentureSection: 'בוא נראה מה יש לנו',
            submitSummary: 'מאשר רכישה',
            fundCoinSectionHeader: 'קרן שיקלית',
            fundGoldSectionHeader: 'קרן סחורות',
            fundStockSectionHeader: 'קרן מניות',
            fundDebentureSectionHeader: 'קרן אגרות חוב',
            summarySectionHeader: 'וואו! איזה תיק השקעות!',

            // Notification strings
            amountNotification: 'לא מעט כסף. בוא נשקיע אותו בתבונה',
            fundCoinNotification: 'אני התראה נעלמת מטבע',
            fundGoldNotification: 'אני התראה נעלמת זהב',
            fundStockNotification: 'אני התראה נעלמת מניות',
            fundDebentureNotification: 'אני התראה נעלמת אג״ח',
            summaryNotification: 'אני התראה נעלמת סיכום',

            // Tracking
            pieChartTitle: 'התפלגות תיק ההשקעות שלך נכון לתאריך: ',
            piePlotName: 'value',
            foundDetailsHeader: 'נתוני הקרן',
            foundDetailsFundNameTitle: 'שם הקרן: ',
            foundDetailsTypeTitle: 'סוג הקרן: ',
            foundDetailsPercentageTitle: 'נתח מהתיק: ',
            foundDetailsValueTitle: 'שווי אחזקה בש"ח: ',
            foundDetailsCostValueTitle: 'שער עלות: ',
            foundDetailsChangedValuePercentageTitle: 'שינוי מעלות באחוזים: ',
            foundDetailsChangedValueCashTitle: 'שינוי כספי: ',
            foundDetailsTotalProfitPercentageTitle: 'סה"כ שינוי מעלות באחוזים: ',
            foundDetailsTotalProfitCashTitle: ' סה"כ שינוי כספי מעלות : ',
            foundDetailsTotalPortfolioCashTitle: 'סה"כ שווי תיק: '
        };

        function calculateWelcomeLabel() {
            var hour = new Date().getHours();
            var prefix;
            if (hour >= 6 && hour < 12) {
                prefix = $rootScope.appmessages.welcomeMorning;
            } else if (hour >= 12 && hour < 16) {
                prefix = $rootScope.appmessages.welcomeNoon;
            } else if (hour >= 16 && hour < 17) {
                prefix = $rootScope.appmessages.welcomeAfternoon;
            } else if (hour >= 17 && hour < 21) {
                prefix = $rootScope.appmessages.welcomeEvening;
            } else {
                prefix = $rootScope.appmessages.welcomeNight;
            }
            $rootScope.appmessages.welcome = prefix + ' ' + $rootScope.appmessages.welcome;
        }

        $scope.amount = 0;
        $scope.totalCash = 123456;
        
        $scope.toolbarItems = [
            { id: 'invest', title: $rootScope.appmessages.investHeader },
            { id: 'track', title: $rootScope.appmessages.trackHeader },
            { id: 'balance', title: $rootScope.appmessages.balance }
        ];
        var elementPos = $scope.toolbarItems.map(function(x) {
            return x.id;
        }).indexOf(window.location.hash.substring(2));
        $scope.selected = $scope.toolbarItems[elementPos];
        $scope.itemSelected = function(item) {
            $scope.selected = item;
        };

        calculateWelcomeLabel();
    });
