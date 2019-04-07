// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['ICU_protractor_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {


    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      });
    });
  
  }
  









  // reporter for protractor.
//   onComplete: function() {
//     var browserName, browserVersion;
//     var capsPromise = browser.getCapabilities();

//     capsPromise.then(function (caps) {
//        browserName = caps.get('browserName');
//        browserVersion = caps.get('version');
//        platform = caps.get('platform');

//        var HTMLReport = require('protractor-html-reporter-2');

//        testConfig = {
//            reportTitle: 'Protractor Test Execution Report',
//            outputPath: './Reporter',
//            outputFilename: 'ProtractorTestReport',
//            screenshotPath: './screenshots',
//            testBrowser: browserName,
//            browserVersion: browserVersion,
//            modifiedSuiteName: false,
//            screenshotsOnlyOnFailure: true,
//            testPlatform: platform
//        };
//        new HTMLReport().from('xmlresults.xml', testConfig);
//    });
// }
};
