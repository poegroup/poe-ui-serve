/**
 * Module dependencies
 */

var stack = require('poe-ui/server');
var dirname = require('path').dirname;
var resolve = require('path').resolve;

var opts = {
  root: __dirname
};

if (process.env.NODE_ENV == 'production') {
  opts.buildPath = process.cwd() + '/build';
  opts.manifest = process.cwd() + '/manifest.json';
}

/**
 * Expose the app
 */

var app = module.exports = stack(opts);

if (process.env.POE_BUILD_PATH) app.builder.output.path = process.env.POE_BUILD_PATH;
app.builder.resolve.modulesDirectories.push(__dirname + '/node_modules');

app.builder.addES6({
  test: /.(js)$/,
  include: /ui-kit/
});

app.builder.addES6({
  test: /.(js)$/,
  include: /poe-ui-serve\/src/
});
