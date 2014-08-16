(function() {
  'use strict';

  var scope, dropsCtrl;

  describe('DropsController', function() {
    beforeEach(angular.mock.module('farmdrop', function($provide) {
      $provide.value('Api', {
        getDrops: function() {
          return {
            success: function(fn) { fn({ drops: ['foo', 'bar'] }); }
          };
        }
      });
    }));

    beforeEach(inject(function($controller, $rootScope) {
      scope     = $rootScope.$new();
      dropsCtrl = $controller('DropsController', { $scope: scope });
    }));

    it('should set drops response on controller initialisation', function() {
      expect(dropsCtrl.drops.drops).toEqual(['foo', 'bar']);
    });
  });
})();
