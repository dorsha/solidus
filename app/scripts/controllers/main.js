'use strict';

angular.module('solidusApp')
    .controller('MainCtrl', function ($scope, $rootScope) {

        // all available funds
        $rootScope.funds = {

            // funds coin
            fundsCoin: {
                fundCoin1: {
                    name: 'מגדל כספית פרימיום',
                    y: 24.85,
                    moneyValue: 25900,
                    costValue: 116.18,
                    changedValuePercentage: 3.6,
                    changedValueCash: 900,
                    direction: '+',
                    mgmtFee: 0.100,
                    commission: 0.01
                },
                fundCoin2: {
                    name: 'מיטב פק"מ נזיל',
                    y: 24.85,
                    moneyValue: 25800,
                    costValue: 111.86,
                    changedValuePercentage: 3.2,
                    changedValueCash: 800,
                    direction: '+',
                    mgmtFee: 0.100,
                    commission: 0.01
                },
                fundCoin3: {
                    name: 'אנליסט כספית',
                    y: 24.85,
                    moneyValue: 25700,
                    costValue: 336.09,
                    changedValuePercentage: 2.8,
                    changedValueCash: 700,
                    direction: '+',
                    mgmtFee: 0.100,
                    commission: 0.01
                },
                fundCoin4: {
                    name: 'פסגות כספית ממוקדת',
                    y: 24.85,
                    moneyValue: 25900,
                    costValue: 100.61,
                    changedValuePercentage: 3.1,
                    changedValueCash: 775,
                    direction: '+',
                    mgmtFee: 0.100,
                    commission: 0.01
                }
            },

            // funds gold
            fundsGold: {
                fundGold1: {
                    name: 'הראל סל זהב',
                    y: 23.03,
                    moneyValue: 24000,
                    costValue: 3548,
                    changedValuePercentage: 4,
                    changedValueCash: 1000,
                    direction: '-',
                    mgmtFee: 1.00,
                    commission: 0.1
                },
                fundGold2: {
                    name: 'תכלית זהב',
                    y: 23.03,
                    moneyValue: 24070,
                    costValue: 4141,
                    changedValuePercentage: 3.7,
                    changedValueCash: 925,
                    direction: '-',
                    mgmtFee: 1.00,
                    commission: 0.1
                },
                fundGold3: {
                    name: 'קסם זהב',
                    y: 23.03,
                    moneyValue: 24450,
                    costValue: 3975,
                    changedValuePercentage: 2.2,
                    changedValueCash: 550,
                    direction: '-',
                    mgmtFee: 1.00,
                    commission: 0.1
                },
                fundGold4: {
                    name: 'תכלית סילבר',
                    y: 23.03,
                    moneyValue: 23875,
                    costValue: 4975,
                    changedValuePercentage: 4.5,
                    changedValueCash: 1125,
                    direction: '-',
                    mgmtFee: 0.90,
                    commission: 0.1
                }
            },

            // funds stock
            fundsStock: {
                fundStock1: {
                    name: 'אנליסט מניות ממוקדת',
                    y: 26.77,
                    moneyValue: 27900,
                    costValue: 111.06,
                    changedValuePercentage: 11.6,
                    changedValueCash: 2900,
                    direction: '+',
                    mgmtFee: 2.610,
                    commission: 0.1
                },
                fundStock2: {
                    name: 'מגדל ת"א 25',
                    y: 26.77,
                    moneyValue: 26150,
                    costValue: 768.75,
                    changedValuePercentage: 8.6,
                    changedValueCash: 2150,
                    direction: '+',
                    mgmtFee: 1.670,
                    commission: 0.1
                },
                fundStock3: {
                    name: 'אנליסט ת"א 100',
                    y: 26.77,
                    moneyValue: 25852.5,
                    costValue: 229.70,
                    changedValuePercentage: 3.41,
                    changedValueCash: 852.5,
                    direction: '+',
                    mgmtFee: 1.900,
                    commission: 0.1
                },
                fundStock4: {
                    name: 'מור מנייתית',
                    y: 26.77,
                    moneyValue: 26550,
                    costValue: 173.02,
                    changedValuePercentage: 6.2,
                    changedValueCash: 1550,
                    direction: '+',
                    mgmtFee: 1.950,
                    commission: 0.1
                }
            },

            // funds debenture
            fundsDebenture: {
                fundDebenture1: {
                    name: 'אילים תיק אג"ח + 10%',
                    y: 25.33,
                    moneyValue: 26400,
                    costValue: 167.09,
                    changedValuePercentage: 5.6,
                    changedValueCash: 1400,
                    direction: '+',
                    mgmtFee: 0.500,
                    commission: 0.1
                },
                fundDebenture2: {
                    name: 'הראל מחקה מדדי מדינה',
                    y: 25.33,
                    moneyValue: 26802.5,
                    costValue: 134.92,
                    changedValuePercentage: 7.21,
                    changedValueCash: 1802.5,
                    direction: '+',
                    mgmtFee: 0.300,
                    commission: 0.1
                },
                fundDebenture3: {
                    name: 'סיגמא ממשלתי ללא מניות',
                    y: 25.33,
                    moneyValue: 26420,
                    costValue: 89.85,
                    changedValuePercentage: 5.68,
                    changedValueCash: 1420,
                    direction: '+',
                    mgmtFee: 0.900,
                    commission: 0.1
                },
                fundDebenture4: {
                    name: 'אקסלנס ממשלתי טהור',
                    y: 25.33,
                    moneyValue: 26247.5,
                    costValue: 108.67,
                    changedValuePercentage: 4.99,
                    changedValueCash: 1247.5,
                    direction: '+',
                    mgmtFee: 0.470,
                    commission: 0.1
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
            summarySectionHeader: 'הגענו לשלב הסופי.',
            summarySectionHeader2: 'הקרנות שבחרת הן:',
            summarySectionMgmtFeeTitle: 'דמי ניהול רבעוניים: ',
            summarySectionCommissionTitle: 'עמלת קניה: ',
            summarySectionTotalMgmtFee: 'סה"כ דמי ניהול רבעוניים: ',
            summarySectionTotalCommission: 'סה"כ עמלות קניה: ',
            summarySectionPastYieldTitle: 'בשנה האחרונה התיק שבחרת הניב תשואה של: ',

            // Notification strings
            amountNotification: 'לא מעט כסף. בוא נשקיע אותו בתבונה',
            fundCoinNotification: 'אני התראה נעלמת מטבע',
            fundGoldNotification: 'אני התראה נעלמת זהב',
            fundStockNotification: 'אני התראה נעלמת מניות',
            fundDebentureNotification: 'אני התראה נעלמת אג״ח',
            summaryNotification: '!הרכישה בוצעה בהצלחה, כל הכבוד',

            // Tracking
            welcomeTrack: '%s, להלן התפלגות תיק ההשקעות שלך נכון לתאריך: ',
            welcomeTrackNotInvested: '%s, לא נמצאו השקעות בחשבונך.',
            buttonMoveToInvest: 'לחץ על מנת להשקיע',
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
            foundDetailsTotalProfitCashTitle: ' סה"כ שינוי כספי מעלות: ',
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

            $rootScope.appmessages.welcomeTrackNotInvested = prefix + ' ' + $rootScope.appmessages.welcomeTrackNotInvested;
            $rootScope.appmessages.welcomeTrackNotInvested = $rootScope.appmessages.welcomeTrackNotInvested.format($scope.username);
        }

        $rootScope.invested = false;
        $scope.username = 'משה';
        $rootScope.amount = 100;
        $scope.totalCash = 123400;

        // selected funds
        $scope.selectedFunds = [];
        $scope.selectedFunds.push($rootScope.funds.fundsCoin.fundCoin1);
        $scope.selectedFunds.push($rootScope.funds.fundsGold.fundGold1);
        $scope.selectedFunds.push($rootScope.funds.fundsStock.fundStock1);
        $scope.selectedFunds.push($rootScope.funds.fundsDebenture.fundDebenture1);

        // toolbar
        $scope.toolbarItems = [
            { id: 'invest', title: $rootScope.appmessages.investHeader },
            { id: 'track', title: $rootScope.appmessages.trackHeader },
            { id: 'balance', title: $rootScope.appmessages.balance }
        ];
        var elementPos = $scope.toolbarItems.map(function(x) {
            return x.id;
        }).indexOf(window.location.hash.substring(2));
        $scope.selected = $scope.toolbarItems[elementPos];
        $rootScope.itemSelected = function(item) {
            $scope.selected = item;
        };

        $scope.scrollTo = function(id) {
            var element = $('#' + id);
            if (element.length) {
                $('html, body').animate({
                    scrollTop : element.offset().top - 140
                }, 750, 'easeOutExpo');
            }
        };

        calculateWelcomeLabels();
    });
