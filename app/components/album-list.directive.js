'use strict';

angular.module('albumListDirective', [])
  .directive('albumList', function() {
    return {
      scope: {},
      templateUrl: 'components/album-list.html',
      controller: 'albumListCtrl',
      controllerAs: 'ctrl'
    };
  })
  .controller('albumListCtrl', ['$scope', 'albumService', 'userService',
    function($scope, albumService, userService) {
      $scope.albums = albumService.query();
      // Following call will preload users json data from server
      // $scope.users = userService.query();
    }
  ]);
