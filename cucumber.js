const { time } = require("console");

module.exports = {
  default: {
    requireModule: ['ts-node/register'],   // Compile TS on the fly
    require: ['steps/**/*.ts', 'Util/Hooks.ts'],            // Step definitions
    paths: ['features/**/*.feature'],      // Feature files
    format: ['progress']   ,              // Output format
    timeout: 60000                   // Timeout for each step
  }
};
