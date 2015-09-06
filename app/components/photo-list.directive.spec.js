'use strict';


/* jasmine specs for controllers go here */
describe('photoList directive', function() {

  beforeEach(function(){
    jasmine.addMatchers({
      toEqualData: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            if (expected === undefined) {
              expected = '';
            }
            var result = {};
            result.pass = angular.equals(actual, expected);
            return result;
          }
        };
      }
    });
  });

  beforeEach(module('albumDemoApp'));
  beforeEach(module('albumDemoServices'));

  describe('photoListCtrl', function(){
    var scope, ctrl, $httpBackend;
    var mockPhotosJsonData = [{
      "albumId": 1,
      "id": 7,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/30ac17"
    }, {
      "albumId": 91,
      "id": 15,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/dff9f6"
    }];

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/photos').
      respond(mockPhotosJsonData);

      scope = $rootScope.$new();
      ctrl = $controller('photoListCtrl', {$scope: scope});
    }));

    it('should create "photos" model with 2 photos fetched from xhr', function() {
      expect(scope.photos).toEqualData([]);
      $httpBackend.flush();

      expect(scope.photos.length).toEqual(2);
      expect(scope.photos).toEqualData(mockPhotosJsonData);
    });

  });

});
