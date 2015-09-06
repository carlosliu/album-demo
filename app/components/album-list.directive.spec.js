'use strict';


/* jasmine specs for controllers go here */
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

  describe('albumListCtrl', function(){
    var scope, ctrl, $httpBackend;
    var mockAlbumsJsonData = [{userId: 1, id: 3, title: 'neque porro quisquam'}, {userId: 2, id: 4, title: 'est qui dolorem'}];

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

});
