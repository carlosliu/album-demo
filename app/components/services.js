'use strict';

/* Services */

angular.module('albumDemoServices', ['ngResource'])
  .factory('userService', ['$resource', function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users', {}, {
      query: {
        method: 'GET',
        cache: true,
        isArray: true
      }
    });
  }])
  .factory('albumService', ['$resource', function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/albums', {}, {
      query: {
        method: 'GET',
        cache: true,
        isArray: true
      }
    });
  }])
  .factory('photoService', ['$resource', function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/photos', {}, {
      query: {
        method: 'GET',
        cache: true,
        isArray: true
      }
    });
  }]);
