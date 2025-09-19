const { time } = require("console");

module.exports = {
  default: {
    requireModule: ['ts-node/register'],   // Compile TS on the fly
    require: ['steps/**/*.ts', 'Util/Hooks.ts'],            // Step definitions
    paths: ['features/**/*.feature'],      // Feature files
    format: ['progress', 'json:reports/cucumber_report.json']   ,              // Output format
    timeout: 60000                   // Timeout for each step
  }
};
