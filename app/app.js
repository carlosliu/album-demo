'use strict';

var albumDemoApp = angular.module('albumDemoApp', [
  'ngRoute',
  'albumDemoServices',
  // Using directive for localized scope, avoid ng-controller
  'userNameDirective',
  'albumListDirective',
  'photoListDirective'
]);

// Setup simple route, ngRoute is more than enough to handle.
// For more complex situation, ui-route could be much better.
albumDemoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'components/albumsTable.html'
  }).when('/album/:albumId', {
    templateUrl: 'components/albumDetail.html'
  }).otherwise({
    redirectTo: '/'
  });
}]);
