(function() {
  'use strict';

  angular.module('farmdrop.services').factory('DropsFactory', DropsFactory);

  function DropsFactory() {
    var factory = {
      drops: []
    };

    factory.setDrops = function(data) {
      factory.drops = data;

      return factory.drops;
    };

    return factory;
  }
})();
