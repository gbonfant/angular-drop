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

    this.updateDrop = function(drop) {
      return $http({
        method: 'PUT',
        url: this.url + 'drops/' + drop.id,
        data: drop,
        headers: { 'X-Spree-Token': 'da9788a6f02d35987b34f42e177197f511660fc91ddfa788' }
      });
    };
  }
})();
