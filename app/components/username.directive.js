'use strict';

angular.module('userNameDirective', [])
  .directive('userName', function() {
    return {
      restrict: 'E',
      scope: {
        id: "="
      },
      controller: 'userNameCtrl',
      controllerAs: 'ctrl',
      link: function(scope, element, attrs) {
        scope.users.$promise.then(function(data) {
          var user = data.filter(function(item) {
            return item.id === scope.id;
          })[0];
          element.html("<span>" + user.name + "</span>");
        });
      }
    };
  })
  .controller('userNameCtrl', ['$scope', 'userService',
    function($scope, userService) {
      $scope.users = userService.query();
    }
  ]);
