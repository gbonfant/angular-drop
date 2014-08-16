(function() {
  'use strict';

  angular.module('farmdrop.controllers').controller('DropsController', DropsController);

  DropsController.$inject = ['Api'];

  function DropsController(Api) {
    //
    // Initialisation calls
    //
    Api.getDrops().success(angular.bind(this, function(response) {
      this.drops = response.drops;
    }));
  }
})();
