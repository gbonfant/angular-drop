(function() {
  'use strict';

  var element, $scope, scope, template;

  var drop = {
    name: 'foobar',
    images: [{ attachment_file_path: 'foo', attachment_file_name: 'bar', alt: 'baz' }]
  };

  describe('dropTile', function() {
    beforeEach(function() {
      angular.mock.module('farmdrop');
      angular.mock.module('templates');

      inject(function($compile, $rootScope, $templateCache) {
        $scope      = $rootScope.$new();
        $scope.drop = drop;
        element     = angular.element('<drop-tile drop="drop"></drop-tile>');
        element     = $compile(element)($scope);
        scope       = element.scope();

        scope.$digest();
      });
    });

    it('should assign a image object to the scope', function() {
      expect(element.isolateScope().image).toBeDefined();
      expect(element.isolateScope().image.url).toEqual('https://farmdrop.imgix.net/foobar?w=360&h=240&fit=crop');
    });
  });
})();
