'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('albumDemoApp'));

  // Test service availability
  it('check the existence of userService factory', inject(function(userService) {
    expect(userService).toBeDefined();
  }));
  it('check the existence of albumService factory', inject(function(albumService) {
    expect(albumService).toBeDefined();
  }));
  it('check the existence of photoService factory', inject(function(photoService) {
    expect(photoService).toBeDefined();
  }));
});
