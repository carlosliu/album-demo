module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/app.js',
      'app/components/**/*.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-ng-html2js-preprocessor',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    preprocessors: {
      'app/components/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    }

  });
};
