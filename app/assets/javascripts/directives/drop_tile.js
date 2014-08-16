(function() {
  'use strict';

  angular.module('farmdrop.directives').directive('dropTile', DropTile);

  DropTile.$injector = [];

  function DropTile() {
    return {
      restrict: 'EA',
      scope: { drop: '=' },
      templateUrl: '/directives/drop_tile.html',

      link: function(scope, element) {
        var image = scope.drop.images[0];

        if (image) {
          scope.image = {
            url: 'https://farmdrop.imgix.net/' +
                  image.attachment_file_path +
                  image.attachment_file_name +
                  '?w=360&h=240&fit=crop',
            alt: image.alt
          };
        } else {
          scope.image = { url: 'http://placehold.it/360x240', alt: 'Placeholder' };
        }
      }
    };
  }
})();
