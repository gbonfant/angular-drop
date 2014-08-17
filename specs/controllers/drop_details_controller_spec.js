(function() {
  'use strict';

  var scope, dropDetailsCtrl;

  describe('DropDetailsController', function() {
    beforeEach(angular.mock.module('farmdrop', function($provide) {
      $provide.value('Api', {
        getDrop: function(dropId) {
          return {
            success: function(fn) { fn({ id: dropId }); }
          };
        }
      });
    }));

    beforeEach(inject(function($controller, $rootScope, $routeParams) {
      $routeParams.id = 1;
      scope           = $rootScope.$new();
      dropDetailsCtrl = $controller('DropDetailsController', { $scope: scope });
    }));

    it('should set drop response on controller initialisation', function() {
      expect(dropDetailsCtrl.drop).toEqual({ id: 1 });
    });

    it('should set a showForm attribute with defaults', function() {
      expect(dropDetailsCtrl.showForm).toBe(false);
    });

    describe('toggleForm()', function() {
      it('should set showForm to true', function() {
        dropDetailsCtrl.toggleForm();

        expect(dropDetailsCtrl.showForm).toBe(true);
      });

      it('should set showForm to false', function() {
        dropDetailsCtrl.toggleForm();
        dropDetailsCtrl.toggleForm();

        expect(dropDetailsCtrl.showForm).toBe(false);
      });
    });
  });
})();
