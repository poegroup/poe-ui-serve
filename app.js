/**
 * Module dependencies
 */

var stack = require('poe-ui/server');
var dirname = require('path').dirname;
var resolve = require('path').resolve;

/**
 * Expose the app
 */

var app = module.exports = stack({
  root: __dirname,
});

app.builder.resolve.modulesDirectories.push(__dirname + '/node_modules');

app.builder.output.path = process.env.POE_BUILD_PATH;

app.builder.addES6({
  test: /.(js)$/,
  include: /ui-kit/
});
