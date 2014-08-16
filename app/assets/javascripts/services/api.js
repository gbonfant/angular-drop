(function() {
  'use strict';

  angular.module('farmdrop.services').service('Api', Api);

  Api.$inject = ['$http'];

  function Api($http) {
    // this.url = 'http://api-dev.farmdrop.co.uk/api/v1/';
    this.url = 'https://api-release.farmdrop.co.uk/api/v1/';
    // this.url = 'https://api.farmdrop.co.uk/api/v1/';

    this.getDrops = function() {
      return $http.get(this.url + 'drops');
    };
  }
})();
