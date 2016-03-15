'use strict';

var _ = require('lodash');
var errors = require('../lib/internal-error');
var tap = require('tap');

// Sanity checks for error types
tap.test('Handlerr Errors', function (t) {
  t.test('Error collection', function(t) {
    t.ok(errors, 'Error collection contains values');
    // Common error checks
    _.each(errors, function(err) {
      try {
        throw new err('test msg');
      } catch(e) {
        t.equal(e.message, 'test msg', 'error message is correct');
        t.equal(e.code, err.prototype.code, 'code is correct');
      }
    });
    t.end();
  });
  t.end();
});
