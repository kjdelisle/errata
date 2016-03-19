'use strict';

var _ = require('lodash');
var fmt = require('util').format;

/**
 * Load a collection of Error types from configuration.
 * @param {string} filepath - The path of the error configuration.
 */
exports.loadConfig = function(filepath) {
  var handlerr = require('../index');
  var cfg;
  var path = _.endsWith(filepath, '.json') ?  filepath : filepath + '.json';
  cfg = _.attempt(function() {
    return require(path);
  });
  if (_.isError(cfg))
    throw new Error(fmt('Failed to load configuration: %s', cfg.message));
  var errors = _.map(cfg.errors, function(item) {
    return handlerr.create(item.name, item.code);
  });
  return errors;
};
