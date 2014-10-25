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
                    costValue : 116.18,
                    changedValuePercentage : 3.6,
                    changedValueCash : 900,
                    direction : '+',
                    mgmtFee: 0.100
                },
                fundCoin2 : {
                    name : 'מיטב פק"מ נזיל',
                    y : 24.85,
                    moneyValue : 25800,
                    costValue : 111.86,
                    changedValuePercentage : 3.2,
                    changedValueCash : 800,
                    direction : '+',
                    mgmtFee: 0.100
                },
                fundCoin3 : {
                    name : 'אנליסט כספית',
                    y : 24.85,
                    moneyValue : 25700,
                    costValue : 336.09,
                    changedValuePercentage : 2.8,
                    changedValueCash : 700,
                    direction : '+',
                    mgmtFee: 0.100
                },
                fundCoin4 : {
                    name : 'פסגות כספית ממוקדת',
                    y : 24.85,
                    moneyValue : 25900,
                    costValue : 100.61,
                    changedValuePercentage : 3.1,
                    changedValueCash : 775,
                    direction : '+',
                    mgmtFee: 0.100
                }
            },

            // funds gold
            fundsGold: {
                fundGoldSelected : {
                    name : 'הראל סל זהב',
                    y : 23.03,
                    moneyValue : 24000,
                    costValue : 3548,
                    changedValuePercentage : 4,
                    changedValueCash : 1000,
                    direction : '-',
                    mgmtFee: 1.00
                },
                fundGold2 : {
                    name : 'תכלית זהב',
                    y : 23.03,
                    moneyValue : 24070,
                    costValue : 4141,
                    changedValuePercentage : 3.7,
                    changedValueCash : 925,
                    direction : '-',
                    mgmtFee: 1.00
                },
                fundGold3 : {
                    name : 'קסם זהב',
                    y : 23.03,
                    moneyValue : 24450,
                    costValue : 3975,
                    changedValuePercentage : 2.2,
                    changedValueCash : 550,
                    direction : '-',
                    mgmtFee: 1.00
                },
                fundGold4 : {
                    name : 'תכלית סילבר',
                    y : 23.03,
                    moneyValue : 23875,
                    costValue : 4975,
                    changedValuePercentage : 4.5,
                    changedValueCash : 1125,
                    direction : '-',
                    mgmtFee: 0.90
                }
            },

            // funds stock
            fundsStock: {
                fundStockSelected : {
                    name : 'אנליסט מניות ממוקדת',
                    y : 26.77,
                    moneyValue : 27900,
                    costValue : 111.06,
                    changedValuePercentage : 11.6,
                    changedValueCash : 2900,
                    direction : '+',
                    mgmtFee: 2.610
                },
                fundStock2 : {
                    name : 'מגדל ת"א 25',
                    y : 26.77,
                    moneyValue : 26150,
                    costValue : 768.75,
                    changedValuePercentage : 8.6,
                    changedValueCash : 2150,
                    direction : '+',
                    mgmtFee: 1.670
                },
                fundStock3 : {
                    name : 'אנליסט ת"א 100',
                    y : 26.77,
                    moneyValue : 25852.5,
                    costValue : 229.70,
                    changedValuePercentage : 3.41,
                    changedValueCash : 852.5,
                    direction : '+',
                    mgmtFee: 1.900
                },
                fundStock4 : {
                    name : 'מור מנייתית',
                    y : 26.77,
                    moneyValue : 26550,
                    costValue : 173.02,
                    changedValuePercentage : 6.2,
                    changedValueCash : 1550,
                    direction : '+',
                    mgmtFee: 1.950
                }
            },

            // funds debenture
            fundsDebenture: {
                fundDebentureSelected : {
                    name : 'אילים תיק אג"ח + 10%',
                    y : 25.33,
                    moneyValue : 26400,
                    costValue : 167.09,
                    changedValuePercentage : 5.6,
                    changedValueCash : 1400,
                    direction : '+',
                    mgmtFee: 0.500
                },
                fundDebenture2 : {
                    name : 'הראל מחקה מדדי מדינה',
                    y : 25.33,
                    moneyValue : 26802.5,
                    costValue : 134.92,
                    changedValuePercentage : 7.21,
                    changedValueCash : 1802.5,
                    direction : '+',
                    mgmtFee: 0.300
                },
                fundDebenture3 : {
                    name : 'סיגמא ממשלתי ללא מניות',
                    y : 25.33,
                    moneyValue : 26420,
                    costValue : 89.85,
                    changedValuePercentage : 5.68,
                    changedValueCash : 1420,
                    direction : '+',
                    mgmtFee: 0.900
                },
                fundDebenture4 : {
                    name : 'אקסלנס ממשלתי טהור',
                    y : 25.33,
                    moneyValue : 26247.5,
                    costValue : 108.67,
                    changedValuePercentage : 4.99,
                    changedValueCash : 1247.5,
                    direction : '+',
                    mgmtFee: 0.470
                }
            }
        };

        // App labels
        $rootScope.appmessages = {
            nis: 'ש"ח',
            investHeader: 'השקעה',
            trackHeader: 'מעקב',
            balance: 'איזון',
            welcomeInvest: '%s, ברשותך %s ש"ח. לא מעט כסף, בוא נשקיע אותו בחוכמה.',
            welcomeMorning: 'בוקר טוב',
            welcomeNoon: 'צהריים טובים',
            welcomeAfternoon: 'אחר הצהריים טובים',
            welcomeEvening: 'ערב טוב',
            welcomeNight: 'לילה טוב',
            chooseAmount: 'בחר סכום להשקעה:',
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
            welcomeTrack: '%s, להלן התפלגות תיק ההשקעות שלך נכון לתאריך: ',
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

        function calculateWelcomeLabels() {
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
            $rootScope.appmessages.welcomeInvest = prefix + ' ' + $rootScope.appmessages.welcomeInvest;
            $rootScope.appmessages.welcomeInvest = $rootScope.appmessages.welcomeInvest.format($scope.username, $scope.totalCash.toLocaleString());

            $rootScope.appmessages.welcomeTrack = prefix + ' ' + $rootScope.appmessages.welcomeTrack;
            $rootScope.appmessages.welcomeTrack = $rootScope.appmessages.welcomeTrack.format($scope.username);
        }

        $scope.username = 'משה';
        $scope.amount = 0;
        $scope.totalCash = 123400;
        
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

        calculateWelcomeLabels();
    });
