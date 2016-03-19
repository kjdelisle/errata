'use strict';

var create = require('./lib/custom-error');
var loadConfig = require('./lib/load-config').loadConfig;

module.exports = Handlerr;

function Handlerr(name, code, ext) {
  if (name)
    return create(name, code, ext);
}

Handlerr.create = create;
Handlerr.loadConfig = loadConfig;
