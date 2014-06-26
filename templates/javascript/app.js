/*jshint unused: vars */
define(['angular']/*deps*/, function (angular)/*invoke*/ {
    'use strict';

    return angular.module('<%= scriptAppName %>', [/*angJSDeps*/<%= angularModules %>])<% if (uiRouter) { %>
      .config(function ($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/');
        
          $stateProvider
              .state('index', {
                  url: '/',
                  templateUrl: 'views/main.html',
                  controller: 'MainCtrl'
              });
      })<% } %>;
});