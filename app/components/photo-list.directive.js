'use strict';

angular.module('photoListDirective', [])
  .directive('photoList', function() {
    return {
      scope: {},
      templateUrl: 'components/photo-list.html',
      controller: 'photoListCtrl',
      controllerAs: 'ctrl'
    };
  })
  .controller('photoListCtrl', ['$scope', '$routeParams', 'photoService',
    function($scope, $routeParams, photoService) {

      $scope.photos = photoService.query({ albumId: $routeParams.albumId });

      // load and show fullsize image
      $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = [imageUrl];
        $scope.showImage = true;
      };

      // close/hide fullsize image
      $scope.closeImage = function() {
        $scope.showImage = false;
      };
    }
  ]);
