// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

    // Each tab has its own nav history stack:

    .state('tab.callList', {
        url: '/callList',
        views: {
            'tab-callList': {
                templateUrl: 'templates/tab-callList.html',
                controller: 'callListCtrl'
            }
        }
    })

    .state('tab.phoneBook', {
        url: '/phoneBook',
        views: {
            'tab-phoneBook': {
                templateUrl: 'templates/tab-phoneBook.html',
                controller: 'phoneBookCtrl'
            }
        }
    })
      .state('tab.contactDetails', {
          url: '/phoneBook/:chatId',
          views: {
              'tab-phoneBook': {
                  templateUrl: 'templates/contact-details.html',
                  controller: 'contactDetailsCtrl'
              }
          }
      })

    .state('tab.favorites', {
        url: '/favorites',
        views: {
            'tab-favorites': {
                templateUrl: 'templates/tab-favorites.html',
                controller: 'favoritesCtrl'
            }
        }
    })

      .state('tab.groups', {
          url: '/groups',
          views: {
              'tab-groups': {
                  templateUrl: 'templates/tab-groups.html',
                  controller: 'groupsCtrl'
              }
          }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/phoneBook');

})
// Custom direrctive in order to hide the tabs in some views
.directive('hideTabs', function ($rootScope) {
    return {
        restrict: 'A',
        link: function ($scope, $el) {
            $scope.$on("$ionicView.enter", function () {
                $rootScope.hideTabs = true;
            });
            $scope.$on("$ionicView.leave", function () {
                $rootScope.hideTabs = false;
            });
        }
    };
});
var app = angular.module('starter.controllers', []);
