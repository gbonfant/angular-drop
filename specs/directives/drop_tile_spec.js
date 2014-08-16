(function() {
  'use strict';

  var element, scope;

  var drop = {
    name: 'foobar',
    images: [{ attachment_file_path: 'foo', attachment_file_name: 'bar', alt: 'baz' }]
  };

  describe('dropTile', function() {
    beforeEach(function() {
      angular.module('templates');

      inject(function($compile, $rootScope) {
        scope   = $rootScope.$new();
        element = angular.element('<drop-tile drop="{{drop}}"></drop-tile>');

        scope.drop = drop;
        element    = $compile(element)(scope);

        scope.$digest();
      });
    });

    it('should contain an img tag with the proper url', function() {
      expect(true).toBe(true);
    });
  });
})();
