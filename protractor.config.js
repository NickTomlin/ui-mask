exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/maskSpec.protractor.js'],
    baseUrl: 'http://localhost:6789',
    capabilities: {
        browserName: 'firefox',
        name: 'ui-mask protractor tests',
        logName: 'Firefox - English'
    }
};
