module.exports = {
  default: {
    requireModule: ['ts-node/register'],   // Compile TS on the fly
    require: ['steps/**/*.ts'],            // Step definitions
    paths: ['features/**/*.feature'],      // Feature files
    format: ['progress']                   // Output format
  }
};
