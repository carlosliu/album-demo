'use strict';


/* jasmine specs for directive go here */
describe('userName directive', function() {

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
  var mockUsersJsonData = [{
    "id": 1,
    "name": "Leanne Graham",
    "address": {
      "street": "Kulas Light",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
  }, {
    "id": 2,
    "name": "Ervin Howell",
    "address": {
      "street": "Victor Plains",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
  }];

  // controller test
  describe('userNameCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').
          respond(mockUsersJsonData);

      scope = $rootScope.$new();
      scope.id = 1;
      ctrl = $controller('userNameCtrl', {$scope: scope});
    }));

    it('should create "users" model with 2 users fetched from xhr', function() {
      expect(scope.users).toEqualData([]);
      $httpBackend.flush();

      expect(scope.users.length).toEqual(2);
      expect(scope.users).toEqualData(mockUsersJsonData);

      expect(scope.user.name).toEqual(mockUsersJsonData[0].name);
    });

    it('should have "user" match with the one with id=1', function() {
      expect(scope.users).toEqualData([]);
      $httpBackend.flush();

      expect(scope.user.name).toEqual(mockUsersJsonData[0].name);
    });

  });

  // directive test
  describe('userNameDirective', function () {
    var element, scope, $httpBackend;

    beforeEach(inject(function (_$httpBackend_, $compile, $rootScope) {
      // user-name directive test do need mockup httpBackend at the moment
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').
          respond(mockUsersJsonData);

      scope = $rootScope.$new();
      scope.id = 1;
      element = $compile('<user-name id="id"></user-name>')(scope);
    }));

    it('Replaces the element with the appropriate content', function () {
      $httpBackend.flush();
      scope.$digest();
      expect(element.html()).toContain(mockUsersJsonData[0].name);
    });

  });

});
