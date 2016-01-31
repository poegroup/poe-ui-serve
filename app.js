/**
 * Module dependencies
 */

var stack = require('poe-ui/server');
var envs = require('envs');

/**
 * Expose the app
 */

var app = module.exports = stack({});

app.builder.resolve.modulesDirectories.push(envs('ESS_PATH'));

app.builder.addES6({
  test: /.(js)$/,
  include: /ui-kit/
});
