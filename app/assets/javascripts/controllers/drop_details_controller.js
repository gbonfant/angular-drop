(function() {
  'use strict';

  angular.module('farmdrop.controllers').controller('DropDetailsController', DropDetailsController);

  DropDetailsController.$inject = ['$routeParams', 'Api'];

  function DropDetailsController($routeParams, Api) {
    //
    // Model data
    //
    this.drop     = undefined;
    this.newDrop  = undefined;
    this.showForm = false;

    //
    // Actions
    //
    this.toggleForm = function() {
      this.showForm = !this.showForm;
    };

    this.enterEdit = function() {
      if (this.newDrop) {
        return;
      }

      this.newDrop = angular.copy(this.drop);
    };


    this.updateDrop = function() {
      Api.updateDrop(this.newDrop).success(function(response) {
        // updated
      });
    };

    //
    // Initialisation calls
    //
    Api.getDrop($routeParams.id).success(angular.bind(this, function(response) {
      this.drop = response;
    }));
  }
})();
