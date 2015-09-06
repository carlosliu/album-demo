'use strict';

describe('album demo app', function() {


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('albums table page', function() {

    beforeEach(function() {
      browser.get('#/');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('h3')).first().getText()).
        toMatch(/Albums/);
    });

  });


  describe('album detail page(5)', function() {

    beforeEach(function() {
      browser.get('#/albums/5');
    });


    it('should render album content (albumId=5) when user navigates to /album/5', function() {
      expect(element.all(by.css('h3')).first().getText()).
        toMatch(/Photos/);
    });

  });
});
