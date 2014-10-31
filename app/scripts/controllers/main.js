'use strict';

angular.module('solidusApp')
    .controller('MainCtrl', function ($window, $scope, $rootScope, BankService, $splash, $timeout) {

        // App labels
        $rootScope.appmessages = {
            nis: '₪',
            agorot: 'אגורות',
            investHeader: 'השקעה',
            trackHeader: 'מעקב',
            balance: 'איזון',
            welcomeInvest: '%s, ברשותך %s ש"ח. לא מעט כסף, בוא נבנה תיק השקעות סולידי.',
            welcomeMorning: 'בוקר טוב',
            welcomeNoon: 'צהריים טובים',
            welcomeAfternoon: 'אחר הצהריים טובים',
            welcomeEvening: 'ערב טוב',
            welcomeNight: 'לילה טוב',
            whySolidus: 'למה סולידוס?',
            bulletDiscount: 'דמי ניהול נמוכים',
            bulletAutoBalance: 'איזון אוטומטי',
            bulletSpread: 'פיזור השקעות',
            chooseAmount: 'בחר סכום להשקעה:',
            chooseFund: 'בחר קרן נאמנות:',
            submitAmountSection: 'בוא נשקיע',
            submitFundCoinSection: 'נמשיך לאפיק הסחורות',
            submitFundGoldSection: 'נעבור לאפיק המנייתי',
            submitFundStockSection: 'נסיים עם אגרות החוב',
            submitFundDebentureSection: 'סיכום התיק',
            submitSummary: 'מאשר רכישה',
            fundCoinToolbarItem: 'קרן כספית',
            fundGoldToolbarItem: 'קרן סחורות',
            fundStockToolbarItem: 'קרן מניות',
            fundDebentureToolbarItem: 'קרן אג"ח',
            fundCoinSectionHeader: 'קרן כספית',
            fundGoldSectionHeader: 'קרן סחורות',
            fundStockSectionHeader: 'קרן מניות',
            fundDebentureSectionHeader: 'קרן אגרות חוב',
            fundCoinSectionDesc: 'נשקיע 25% באפיק הכספי.',
            fundGoldSectionDesc: 'נשקיע 25% בנכסים פיזיים (זהב).',
            fundStockSectionDesc: 'נשקיע 25% באפיק המנייתי.',
            fundDebentureSectionDesc: 'נשקיע 25% באגרות חוב ממשלתיות ארוכות טווח.',
            summarySectionHeader: 'הגענו לשלב הסופי.',
            summarySectionHeader2: 'הקרנות שבחרת הן:',
            summarySectionMgmtFeeTitle: 'דמי ניהול רבעוניים: ',
            summarySectionCommissionTitle: 'עמלת קניה: ',
            summarySectionTotalMgmtFee: 'סה"כ דמי ניהול רבעוניים: ',
            summarySectionTotalCommission: 'סה"כ עמלות קניה: ',
            summarySectionPastYieldTitle: 'בשנה האחרונה התיק שבחרת הניב תשואה של: ',
            summarySaving: 'בקניה זו חסכת ',
            buttonMoveToTracking: 'חזרה למעקב',
            welcomeInvestNotInvested1: 'תיק השקעות קיים במערכת.',
            welcomeInvestNotInvested2: 'כרגע אנחנו מגבילים לתיק השקעות אחד בלבד.',
            welcomeInvestNotInvested3: 'בעתיד נתמוך במספר תיקי השקעות במקביל.',
            welcomeInvestNotInvested4: 'תודה על שהשקעת עם סולידוס.',

            // Notification strings
            amountNotification: 'מעולה, בוא נדאג לעתיד שלך.',
            fundCoinNotification: 'האפיק הכספי יגן עלינו בזמן מיתון.',
            fundGoldNotification: 'זהב, במצב של אינפלציה ערכו יעלה.',
            fundStockNotification: 'מניות, נקצור את הפירות כשהשוק יעלה.',
            fundDebentureNotification: 'אגרות החוב יזנקו כשהמחירים ירדו.',
            summaryNotification: 'הרכישה בוצעה, התיק כבר מתחיל לעבוד.',

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
            foundDetailsTotalProfitTitle: 'תשואת התיק: ',
            foundDetailsTotalPortfolioCashTitle: 'שווי תיק: ',

            // Balance page
            welcomeBalance: 'איש אינו יכול לתזמן את השוק, לכן מומלץ לאזן את הקצאת הנכסים בתיק אחת לתקופה.',
            balanceExplanation: 'איזון מחדש של תיק ההשקעות הוא מנגנון ההתערבות המאפשר למשקיע הפסיבי להשיב את הנכסים השונים בתיק למשקלם המקורי, ובכך להבטיח שלא יסטה מפרופיל הסיכון המקורי שהוגדר מראש, לא יהיה מסוכן מדי או מתון מדי ולא יהיה מוטה לנכסים שעלו בערכם.',
            balanceOptions: 'נשתמש בשילוב של שתי שיטות האיזון הסטנדרטיות:',
            balanceDateTitle: 'איזון קלנדרי',
            balanceDate: 'בחר את התדירות בה יתבצע האיזון באופן אוטומטי:',
            balancePercentageTitle: 'איזון מבוסס אחוזים',
            balancePercentage: 'בחר טווח אחוזים בו יתבצע איזון אוטומטי כאשר אחת מהקרנות תחרוג מטווח זה:',
            balanceDateMonthly: 'חודשי',
            balanceQuarter: 'רבעוני',
            balanceYear: 'שנתי',
            balanceTwoYears: 'שנתיים'
        };

        // all available funds
        $rootScope.funds = {

            // funds coin
            fundsCoin: {
                fundCoin1: {
                    name: 'פסגות מחקה מק"מ',
                    type: $rootScope.appmessages.fundCoinSectionHeader,
                    costValue: 112.75,
                    changedValuePercentage: 3.1,
                    direction: '+',
                    mgmtFee: 0.000,
                    commission: 0.01,
                    recommended: true
                },
                fundCoin2: {
                    name: 'מיטב פק"מ נזיל',
                    type: $rootScope.appmessages.fundCoinSectionHeader,
                    costValue: 111.86,
                    changedValuePercentage: 3.2,
                    direction: '+',
                    mgmtFee: 0.100,
                    commission: 0.01
                },
                fundCoin3: {
                    name: 'אנליסט כספית',
                    type: $rootScope.appmessages.fundCoinSectionHeader,
                    costValue: 336.09,
                    changedValuePercentage: 2.8,
                    direction: '+',
                    mgmtFee: 0.100,
                    commission: 0.01
                },
                fundCoin4: {
                    name: 'מגדל כספית פרימיום',
                    type: $rootScope.appmessages.fundCoinSectionHeader,
                    costValue: 116.18,
                    changedValuePercentage: 3.6,
                    direction: '+',
                    mgmtFee: 0.100,
                    commission: 0.01
                }
            },

            // funds gold
            fundsGold: {
                fundGold1: {
                    name: 'קסם זהב לונדון שקלי',
                    type: $rootScope.appmessages.fundGoldSectionHeader,
                    costValue: 1216.96,
                    changedValuePercentage: 2.2,
                    direction: '-',
                    mgmtFee: 1.00,
                    commission: 0.1,
                    recommended: true
                },
                fundGold2: {
                    name: 'תכלית זהב',
                    type: $rootScope.appmessages.fundGoldSectionHeader,
                    costValue: 4141,
                    changedValuePercentage: 3.7,
                    direction: '-',
                    mgmtFee: 1.00,
                    commission: 0.1
                },
                fundGold3: {
                    name: 'הראל סל זהב',
                    type: $rootScope.appmessages.fundGoldSectionHeader,
                    costValue: 3548,
                    changedValuePercentage: 4,
                    direction: '-',
                    mgmtFee: 1.00,
                    commission: 0.1
                },
                fundGold4: {
                    name: 'תכלית סילבר',
                    type: $rootScope.appmessages.fundGoldSectionHeader,
                    costValue: 4975,
                    changedValuePercentage: 4.5,
                    direction: '-',
                    mgmtFee: 0.90,
                    commission: 0.1
                }
            },

            // funds stock
            fundsStock: {
                fundStock1: {
                    name: 'מגדל MTF תל אביב 100',
                    type: $rootScope.appmessages.fundStockSectionHeader,
                    costValue: 143.12,
                    changedValuePercentage: 8.6,
                    direction: '+',
                    mgmtFee: 1.670,
                    commission: 0.000,
                    recommended: true
                },
                fundStock2: {
                    name: 'אנליסט מניות ממוקדת',
                    type: $rootScope.appmessages.fundStockSectionHeader,
                    costValue: 111.06,
                    changedValuePercentage: 11.6,
                    direction: '+',
                    mgmtFee: 2.610,
                    commission: 0.1
                },
                fundStock3: {
                    name: 'אנליסט ת"א 100',
                    type: $rootScope.appmessages.fundStockSectionHeader,
                    costValue: 229.70,
                    changedValuePercentage: 3.41,
                    direction: '+',
                    mgmtFee: 1.900,
                    commission: 0.1
                },
                fundStock4: {
                    name: 'מור מנייתית',
                    type: $rootScope.appmessages.fundStockSectionHeader,
                    costValue: 173.02,
                    changedValuePercentage: 6.2,
                    direction: '+',
                    mgmtFee: 1.950,
                    commission: 0.1
                }
            },

            // funds debenture
            fundsDebenture: {
                fundDebenture1: {
                    name: 'הראל מחקה מדדי מדינה',
                    type: $rootScope.appmessages.fundDebentureSectionHeader,
                    costValue: 134.92,
                    changedValuePercentage: 7.21,
                    direction: '+',
                    mgmtFee: 0.300,
                    commission: 0.1,
                    recommended: true
                },
                fundDebenture2: {
                    name: 'אילים תיק אג"ח + 10%',
                    type: $rootScope.appmessages.fundDebentureSectionHeader,
                    costValue: 167.09,
                    changedValuePercentage: 5.6,
                    direction: '+',
                    mgmtFee: 0.500,
                    commission: 0.1
                },
                fundDebenture3: {
                    name: 'סיגמא ממשלתי ללא מניות',
                    type: $rootScope.appmessages.fundDebentureSectionHeader,
                    costValue: 89.85,
                    changedValuePercentage: 5.68,
                    direction: '+',
                    mgmtFee: 0.900,
                    commission: 0.1
                },
                fundDebenture4: {
                    name: 'אקסלנס ממשלתי טהור',
                    type: $rootScope.appmessages.fundDebentureSectionHeader,
                    costValue: 108.67,
                    changedValuePercentage: 4.99,
                    direction: '+',
                    mgmtFee: 0.470,
                    commission: 0.1
                }
            }
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
            $rootScope.welcomeInvest = prefix + ' ' + $rootScope.appmessages.welcomeInvest;
            $rootScope.welcomeInvest = $rootScope.formatNumberRgx($rootScope.welcomeInvest.format($rootScope.username, $rootScope.totalCash));

            $rootScope.welcomeTrack = prefix + ' ' + $rootScope.appmessages.welcomeTrack;
            $rootScope.welcomeTrack = $rootScope.welcomeTrack.format($rootScope.username);

            $rootScope.welcomeTrackNotInvested = prefix + ' ' + $rootScope.appmessages.welcomeTrackNotInvested;
            $rootScope.welcomeTrackNotInvested = $rootScope.welcomeTrackNotInvested.format($rootScope.username);
        }

        BankService.getTotalCash(function (data) {
            if (!$rootScope.receivedBankData) {
                $rootScope.totalCash = parseInt(data.nisBalance.substring(2, data.nisBalance.length -3).replace(',', ''));
                BankService.getUsername(function (data) {
                    $rootScope.username = data.customerName;
                    calculateWelcomeLabels();
                    $rootScope.receivedBankData = true;
                });
            }
        });

        $rootScope.invested = false;
        $rootScope.amount = 100;

        // selected funds
        $scope.selectedFunds = [];
        $scope.selectedFunds.push($rootScope.funds.fundsCoin.fundCoin1);
        $scope.selectedFunds.push($rootScope.funds.fundsGold.fundGold1);
        $scope.selectedFunds.push($rootScope.funds.fundsStock.fundStock1);
        $scope.selectedFunds.push($rootScope.funds.fundsDebenture.fundDebenture1);

        // toolbar
        var mainToolbar = [
            { id: 'invest', title: $rootScope.appmessages.investHeader },
            { id: 'track', title: $rootScope.appmessages.trackHeader },
            { id: 'balance', title: $rootScope.appmessages.balance }
        ];

        if (!$scope.loaded) {
            $scope.loaded = true;
            $rootScope.toolbarItems = mainToolbar;
        }

        var elementPos = $rootScope.toolbarItems.map(function(x) {
            return x.id;
        }).indexOf(window.location.hash.substring(2));

        $rootScope.selected = $rootScope.toolbarItems[elementPos];
        if (elementPos === -1) {
            $rootScope.selected = $rootScope.toolbarItems[0];
        }

        $rootScope.itemSelected = function(item) {
            var elementPos = $rootScope.toolbarItems.map(function(x) {
                return x.id;
            }).indexOf(item.id);
            if (!$rootScope.investMode || $rootScope.investMode && item.passed || $rootScope.toolbarItems[elementPos - 1].passed) {
                $rootScope.selected = item;
            }
        };

        $rootScope.revertToolbar = function () {
            $rootScope.toolbarItems = mainToolbar;
        };

        $scope.scrollTo = function(id) {
            var element = $('#' + id);
            if (element.length) {
                $('html, body').animate({
                    scrollTop : element.offset().top - 140
                }, 750, 'easeOutExpo');
            }
        };

        $rootScope.formatNumberRgx = function(num) {
            var parts = num.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        };

        function shouldShowSplash() {
          var isMobile = (function detectmob() {
            if(navigator.userAgent.match(/Android/i)
              || navigator.userAgent.match(/webOS/i)
              || navigator.userAgent.match(/iPhone/i)
              || navigator.userAgent.match(/iPad/i)
              || navigator.userAgent.match(/iPod/i)
              || navigator.userAgent.match(/BlackBerry/i)
              || navigator.userAgent.match(/Windows Phone/i)
              ){
              return true;
            }
            else {
              return false;
            }
          })();

          return !$rootScope.splashed && isMobile;
        }

        var shouldShowSplash = shouldShowSplash();

        // open splash screen
        if (shouldShowSplash) {
            $rootScope.splashed = true;
            var close = $splash.open({
                title: 'Solid and Easy investing for everyone'
            });
            $timeout(function () {
                close.close();
                $rootScope.splashed = false;
            }, 3500);
        }
        document.body.addEventListener('touchmove', function(e) {
            if ($rootScope.splashed) {
                e.preventDefault();
            }
        });
    });
