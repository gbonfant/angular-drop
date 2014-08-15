(function() {
  'use strict';

  var scope, dropsCtrl;

  describe('DropsController', function() {
    beforeEach(angular.mock.module('farmdrop'));

    beforeEach(inject(function($controller, $rootScope, $injector) {
      scope     = $rootScope.$new();
      dropsCtrl = $controller('DropsController', { $scope: scope });
    }));

    it('should have a helloworld data reference', function() {
      expect(dropsCtrl.helloworld).not.toBeUndefined();
    });
  });
})();
