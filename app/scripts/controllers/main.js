'use strict';

angular.module('solidusApp')
    .controller('MainCtrl', function ($scope, $rootScope) {

        // App labels
        $rootScope.appmessages = {
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
            foundDetailsTypeTitle: 'סוג הקרן: ',
            foundDetailsPercentageTitle: 'נתח מהתיק: '
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
