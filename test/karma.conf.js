// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-07-07 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-chosen-localytics/chosen.js',
    'bower_components/angular-ui-bootstrap-bower/ui-bootstrap.js',
    'bower_components/ngstorage/ngStorage.js',
    'bower_components/underscore/underscore.js',
    'app/scripts/app.js',
    'app/scripts/core/model/module.js',
    'app/scripts/core/model/model.js',
    'app/scripts/core/model/initializeLocalStorage.js',
    'scripts/main/controllers/main.js',

    'app/scripts/movies/module.js',
    'app/scripts/movies/movieModel.js',
    'app/scripts/movies/controllers/movies.js',

    'app/scripts/genres/module.js',
    'app/scripts/genres/genreModel.js',

    'app/scripts/actors/module.js',
    'app/scripts/actors/actorModel.js',

    'app/scripts/books/module.js',
    'app/scripts/books/bookModel.js',
    'app/scripts/books/controllers/books.js',
    'app/scripts/books/specs/books_spec.js',
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
    'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
    'karma-phantomjs-launcher',
    'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
