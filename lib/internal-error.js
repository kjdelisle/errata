'use strict';

var errata = require('./custom-error');

// Internal errors for use within Errata.
module.exports = {
  ErrataInternalError: errata('ErrataInternalError', 'errata:internal'),
  ErrataConfigError: errata('ErrataConfigError', 'errata:config'),
};
