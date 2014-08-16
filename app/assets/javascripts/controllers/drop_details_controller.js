(function() {
  'use strict';

  angular.module('farmdrop.controllers').controller('DropDetailsController', DropDetailsController);

  DropDetailsController.$inject = ['$routeParams', 'Api'];

  function DropDetailsController($routeParams, Api) {
    //
    // Model data
    //
    this.drop = undefined;

    //
    // Initialisation calls
    //
    Api.getDrop($routeParams.id).success(angular.bind(this, function(response) {
      this.drop = response;
    }));
  }
})();
