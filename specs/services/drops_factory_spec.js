(function() {
  'use strict';

  var dropsFactory;

  describe('DropsFactory', function() {
    beforeEach(function() {
      angular.mock.module('farmdrop');

      inject(function(DropsFactory) {
        dropsFactory = DropsFactory;
      });
    });

    it('should define a drops attribute as empty collection', function() {
      expect(dropsFactory.drops).toEqual([]);
    });

    describe('setDrops()', function() {
      it('should update the factory drops attribute and return the new value', function() {
        var drops =dropsFactory.setDrops('foo');

        expect(drops).toEqual('foo');
      });
    });
  });
})();
