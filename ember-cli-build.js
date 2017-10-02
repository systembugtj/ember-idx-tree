/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {

  let app = new EmberAddon(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 3,
      importBootstrapFont: true,
      importBootstrapCSS: false
    }
  });

  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css.map' );
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/highlightjs/highlight.pack.js');
  app.import('bower_components/highlightjs/styles/tomorrow.css');
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};