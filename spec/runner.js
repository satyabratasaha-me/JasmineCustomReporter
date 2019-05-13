const Jasmine = require('jasmine');
const CustomReporter = require('./reporter');
const CustomMatcher = require('./matchers');



var customMatcher = CustomMatcher.Matcher;


var customReporter = CustomReporter.Reporter;

const jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.env.x='X';

jasmine.env.beforeEach(function(){
    jasmine.addMatchers(customMatcher);
    // var utils  = {
    //     skipTest: function(){
    //         console.log('**************')
    //     }
    // };
    // spyOn(utils, 'skipTest').and.callThrough();
    // spyOn(utils, 'skipTest').and.returnValue(pending());
});

jasmine.addReporter(customReporter);


jasmine.execute();

