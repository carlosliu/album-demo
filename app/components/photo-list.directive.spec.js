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
  // describe('photoListDirective', function () {
  //   var element, scope, $httpBackend;
  //
  //   beforeEach(inject(function (_$httpBackend_, $compile, $rootScope) {
  //     // photo-list directive test donot need mockup httpBackend at the moment
  //     // leave it in here for future improvement
  //     // $httpBackend = _$httpBackend_;
  //     // $httpBackend.expectGET('http://jsonplaceholder.typicode.com/photos').
  //     //     respond(mockPhotosJsonData);
  //
  //     scope = $rootScope.$new();
  //     scope.photos = mockPhotosJsonData;
  //     element = $compile('<tbody><tr ng-repeat="album in albums"><td><a href="#/album/{{album.id}}">{{album.title}}</a></td><td></td></tr></tbody>')(scope);
  //   }));
  //
  //   it('Should have the correct albums titles in the list', function () {
  //     scope.$digest();
  //
  //     var list = element.find('a');
	//     expect(list.length).toBe(mockPhotosJsonData.length);
  //
  //     expect(list[0].text).toEqual(mockPhotosJsonData[0].title);
  //     expect(list[1].text).toEqual(mockPhotosJsonData[1].title);
  //   });
  //
  // });

});
