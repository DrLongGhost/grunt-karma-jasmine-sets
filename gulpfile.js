var gulp = require('gulp');
var karma = require('karma').server;

var karmaTests = {
  widget1: {
    files: [
      { 
        src: [
          'src/widget1.js'
        , 'tests/widget1.test.js'
        ]
        , served: true
        }
      ]
    },
    widget2: {
      files: [
        { 
          src: [
            'tests/mocks/widget1.mock.js'
          , 'src/widget2.js'
          , 'tests/widget2.test.js'
          ]
        , served: true
        }
      ]
    }
  }
, karmaConfig = {
    browsers: ['PhantomJS','Chrome','Firefox']
  , sets: {}
  , basePath: ''
  , frameworks: ['jasmine', 'sets']
  , reporters: [
      'progress'
    ]
  , logLevel: 'INFO'
  , port: 9876
  , colors: true
  , autoWatch: false
  //, debug: true
  , singleRun: false
};
      
  // Place karmaTests inside karmaConfig
  for (var attrname in karmaTests) {
    //karmaConfig[attrname] = karmaTests[attrname];
    karmaConfig.sets[attrname] = karmaTests[attrname].files[0].src.slice(0);
  }
  
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start(karmaConfig, done);
});
