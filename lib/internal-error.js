'use strict';

var handlerr = require('./custom-error');

// Internal errors for use within Handlerr.
module.exports = {
  HandlerrInternalError: handlerr('HandlerrInternalError', 'handler:internal'),
  HandlerrConfigError: handlerr('HandlerrConfigError', 'handler:config'),
};
