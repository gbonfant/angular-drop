(function() {
  'use strict';

  angular.module('farmdrop.controllers').controller('DropsController', DropsController);

  DropsController.$inject = ['Api', 'DropsFactory'];

  function DropsController(Api, DropsFactory) {
    //
    // Model data
    //
    this.drops = DropsFactory;

    //
    // Initialisation calls
    //
    Api.getDrops().success(angular.bind(this, function(response) {
      DropsFactory.setDrops(response.drops);
    }));
  }
})();
