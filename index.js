'use strict';

var create = require('./lib/custom-error');
var loadConfig = require('./lib/load-config').loadConfig;

module.exports = Errata;

function Errata(name, code, ext) {
  if (name)
    return create(name, code, ext);
}

Errata.create = create;
Errata.loadConfig = loadConfig;
