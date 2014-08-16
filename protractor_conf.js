exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['tests/e2e/*_spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};
