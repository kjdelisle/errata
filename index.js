'use strict';

var create = require('./lib/custom-error');

module.exports = Handlerr;

function Handlerr(name, code, ext) {
  if (name)
    return create(name, code, ext);
}

Handlerr.create = create;
