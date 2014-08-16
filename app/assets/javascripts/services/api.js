(function() {
  'use strict';

  angular.module('farmdrop.services').service('Api', Api);

  Api.$inject = ['$http'];

  function Api($http) {
    // Does not work :(
    // this.url = 'http://api-dev.farmdrop.co.uk/api/v1';
    this.url = 'https://api.farmdrop.co.uk/api/v1/';

    this.getDrops = function() {
      return $http({ method: 'GET', url: this.url + 'drops' });
    };
  }
})();
