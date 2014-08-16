(function() {
  'use strict';

  angular.module('farmdrop', ['ngRoute', 'farmdrop.controllers', 'farmdrop.services', 'farmdrop.directives']);
  angular.module('farmdrop.controllers', []);
  angular.module('farmdrop.services', []);
  angular.module('farmdrop.directives', []);

  angular.module('farmdrop').config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl: '/views/drops/index.html',
      controller: 'DropsController',
      controllerAs: 'dropsCtrl'
    })
    .when('/drops/:id/:permalink', {
      templateUrl: '/views/drops/show.html',
      controller: 'DropDetailsController',
      controllerAs: 'dropCtrl'
    });
  }
})();
