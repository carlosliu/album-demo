'use strict';

var albumDemoApp = angular.module('albumDemoApp', [
  'ngRoute',
  'albumDemoServices',
  'userNameDirective',
  'albumListDirective',
  'photoListDirective'
]);

albumDemoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'components/albumsTable.html'
  }).when('/album/:albumId', {
    templateUrl: 'components/albumDetail.html'
  }).otherwise({
    redirectTo: '/'
  });
}]);
