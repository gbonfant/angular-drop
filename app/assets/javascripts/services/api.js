(function() {
  'use strict';

  angular.module('farmdrop.services').service('Api', Api);

  Api.$inject = ['$http'];

  function Api($http) {
    this.url = 'https://api-release.farmdrop.co.uk/api/v1/';

    this.getDrops = function() {
      return $http.get(this.url + 'drops');
    };

    this.getDrop = function(dropId) {
      return $http.get(this.url + 'drops/' + dropId);
    };
  }
})();
