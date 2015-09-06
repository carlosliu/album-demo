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
      // link: function(scope, element, attrs) {
      //   scope.users.$promise.then(function(data) {
      //     var user = data.filter(function(item) {
      //       return item.id === scope.id;
      //     })[0];
      //     element.html("<span>" + user.name + "</span>");
      //   });
      // }
      template: '<span>{{user.name}}</span>'
      // link func can do the same thing as template + controller func call
    };
  })
  .controller('userNameCtrl', ['$scope', 'userService',
    function($scope, userService) {

      $scope.users = userService.query();

      $scope.users.$promise.then(function(data) {
        $scope.user = data.filter(function(item) {
          return item.id === $scope.id;
        })[0];
      });

    }
  ]);
