/**
 * For full documentation on the grunt build/test process, refer to Confluence:
 * https://leadid.atlassian.net/wiki/display/LS/Client-Side+Create+Grunt+Tasks
 */
var browsersToTest = ['PhantomJS'];

module.exports = function(grunt) {
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
       options: {
          browsers: ['PhantomJS']
        , sets: {}
        , basePath: ''
        , frameworks: ['jasmine', 'sets']
        , reporters: [
            'nyan'
          ]
        , logLevel: 'INFO'
        , port: 9876
        , colors: true
        , autoWatch: false
        , debug: true
        , singleRun: true
        , captureTimeout: 0
        , browserDisconnectTimeout: 10000
        , browserDisconnectTolerance: 2
        , browserNoActivityTimeout: 180000
        , preprocessors: {
            '**/*.js': ['coverage']
          }
        , process: {
            data: {
              development: true
            }
          }
      }
    }
    ;
      
  // Place karmaTests inside karmaConfig
  for (var attrname in karmaTests) {
    karmaConfig[attrname] = karmaTests[attrname];
    karmaConfig.options.sets[attrname] = karmaTests[attrname].files[0].src.slice(0);
  }
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  , karma: karmaConfig
  });
  //console.log(karmaConfig);
  
  grunt.loadNpmTasks('grunt-karma');

}
