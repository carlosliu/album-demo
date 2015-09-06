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


    it('should render albumsTable when user navigates to /', function() {
      expect(element.all(by.css('h3')).first().getText()).
        toMatch(/Albums/);
    });

    it('should render 100 albums in the list when user navigates to /', function() {
      expect(element.all(by.repeater('album in albums')).count()).toEqual(100);
    });

  });


  describe('albums table page mouse click', function() {

    beforeEach(function() {
      browser.get('#/');
      element.all(by.css('[class="ng-binding"]') ).get(4).click();
    });


    it('should render album/3 when user click 3rd link', function() {
      expect(browser.getLocationAbsUrl()).toMatch("/album/3");
    });

  });


});
