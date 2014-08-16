(function() {
  'use strict';

  var baseUrl = 'https://api-release.farmdrop.co.uk/api/v1/';
  var $httpBackend, apiService;

  describe('Api service', function() {
    beforeEach(function() {
      angular.mock.module('farmdrop.services');

      inject(function($injector, _$httpBackend_) {
        apiService   = $injector.get('Api');
        $httpBackend = _$httpBackend_;
      });
    });

    it('should define a url attribute with defaults', function() {
      expect(apiService.url).toEqual(baseUrl);
    });

    describe('getDrops()', function() {
      it('should GET /drops endpoint', function() {
        $httpBackend.expectGET(baseUrl + 'drops').respond('bar');

        apiService.getDrops().then(function(response) {
          expect(response.data).toEqual('bar');
        });

        $httpBackend.flush();
      });
    });
  });
})();
