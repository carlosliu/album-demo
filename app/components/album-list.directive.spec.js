'use strict';


/* jasmine specs for directive go here */
describe('albumList directive', function() {

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
  var mockAlbumsJsonData = [{userId: 1, id: 3, title: 'neque porro quisquam'}, {userId: 2, id: 4, title: 'est qui dolorem'}];

  // controller test
  describe('albumListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/albums').
          respond(mockAlbumsJsonData);

      scope = $rootScope.$new();
      ctrl = $controller('albumListCtrl', {$scope: scope});
    }));

    it('should create "albums" model with 2 albums fetched from xhr', function() {
      expect(scope.albums).toEqualData([]);
      $httpBackend.flush();

      expect(scope.albums).toEqualData(mockAlbumsJsonData);
    });

  });

  // directive test
  describe('albumListDirective', function () {
    var element, scope, $httpBackend;

    beforeEach(inject(function (_$httpBackend_, $compile, $rootScope) {
      // album-list directive test donot need mockup httpBackend at the moment
      // leave it in here for future improvement
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/albums').
          respond(mockAlbumsJsonData);

      scope = $rootScope.$new();
      scope.albums = mockAlbumsJsonData;
      element = $compile('<tbody><tr ng-repeat="album in albums"><td><a href="#/album/{{album.id}}">{{album.title}}</a></td><td></td></tr></tbody>')(scope);
    }));

    it('Should have the correct albums titles in the list', function () {
      scope.$digest();

      var list = element.find('a');
      // check data length
      expect(list.length).toBe(mockAlbumsJsonData.length);
      // check data content
      expect(list[0].text).toEqual(mockAlbumsJsonData[0].title);
      expect(list[1].text).toEqual(mockAlbumsJsonData[1].title);
    });

  });

});
