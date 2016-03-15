'use strict';

var _ = require('lodash');
var assert = require('assert');
var util = require('util');

/**
 * Create a new Error constructor.
 * @param {string} name - The name of your error.
 * @param {string=} code - The code of your error.
 * @param {Function=} ext - An initializer function for altering the custom
 * Error's behaviour (such as modifying the message, code, or adding custom
 * values to the object).
 * @returns {Function} Constructor function for custom Error.
 */
module.exports = function(name, code, ext) {
  assert(name, 'A name must be provided to generate a new Error type.');
  function CustomError(message) {
    if (!Error.captureStackTrace) // IE...
      this.stack = (new Error()).stack;
    else
      Error.captureStackTrace(this, this.constructor);
    this.message = message;
    if (ext && ext instanceof Function)
      ext.apply(this, arguments);
  }
  CustomError.prototype = new Error();
  CustomError.prototype.name = name;
  CustomError.prototype.code = code || 'ERR';
  CustomError.prototype.constructor = CustomError;
  return CustomError;
};
