'use strict';


/* jasmine specs for directive go here */
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

  // mockup data
  var mockPhotosJsonData = [{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/30ac17"
  }, {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/dff9f6"
  }, {
    "albumId": 2,
    "id": 64,
    "title": "doloremque culpa quia",
    "url": "http://placehold.it/600/cd5a92",
    "thumbnailUrl": "http://placehold.it/150/76b95b"
  }, {
    "albumId": 2,
    "id": 65,
    "title": "sed voluptatum enim eaque cumque qui sunt",
    "url": "http://placehold.it/600/149540",
    "thumbnailUrl": "http://placehold.it/150/44318f"
  }, {
    "albumId": 97,
    "id": 4814,
    "title": "ipsam nam sunt sint sit magni",
    "url": "http://placehold.it/600/81ec84",
    "thumbnailUrl": "http://placehold.it/150/f6bf88"
  }, {
    "albumId": 97,
    "id": 4815,
    "title": "dolores quam vel in doloremque omnis voluptas rerum ea",
    "url": "http://placehold.it/600/5bb34b",
    "thumbnailUrl": "http://placehold.it/150/3eb2a2"
  }];

  // controller test
  describe('photoListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/photos').
          respond(mockPhotosJsonData);

      scope = $rootScope.$new();
      ctrl = $controller('photoListCtrl', {$scope: scope});
    }));

    it('should create "photos" model with 6 photos fetched from xhr', function() {
      expect(scope.photos).toEqualData([]);
      $httpBackend.flush();

      expect(scope.photos).toEqualData(mockPhotosJsonData);
    });

  });

  // directive test
  describe('photoListDirective', function () {
    var element, scope, $httpBackend;

    // karma-ng-html2js-preprocessor make templateUrl in directive test possible
    beforeEach(module('components/photo-list.html'));
    beforeEach(inject(function (_$httpBackend_, $compile, $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/photos').
          respond(mockPhotosJsonData);

      scope = $rootScope.$new();
      scope.photos = mockPhotosJsonData;
      element = $compile('<div><photo-list></photo-list></div>')(scope);
    }));

    it('Should have the 6 thumbnails in the list', function () {
      $httpBackend.flush();
      scope.$digest();

      var list = element.find('img');
      // check data length
      expect(list.length).toBe(mockPhotosJsonData.length);
      // check matching thumbnail url
      expect(list[0].src).toEqual(mockPhotosJsonData[0].thumbnailUrl);
      expect(list[1].src).toEqual(mockPhotosJsonData[1].thumbnailUrl);
      expect(list[2].src).toEqual(mockPhotosJsonData[2].thumbnailUrl);
      // check matching title
      list = element[0].getElementsByClassName('img-title');
      expect(list[3].innerText).toEqual(mockPhotosJsonData[3].title);
      expect(list[4].innerText).toEqual(mockPhotosJsonData[4].title);
      expect(list[5].innerText).toEqual(mockPhotosJsonData[5].title);

    });

  });

  // TODO: add test for mouse click events on thumbnails

});
