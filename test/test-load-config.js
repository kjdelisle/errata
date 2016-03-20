'use strict';

var _ = require('lodash');
var errata = require('../index');
var path = require('path');
var tap = require('tap');

tap.test('Error Configuration', function (t) {
  t.test('Load error types from config', function(t) {
    var config = errata.loadConfig(path.resolve('test', 'fixtures',
      'fake-config.json'));
    t.ok(config, 'Config has value');
    _.each(config, function(err) {
      t.ok(err.prototype.name, 'Error constructor has a name');
      t.ok(err.prototype.code, 'Error constructor has a code');
      try {
        throw new err('errmsg');
      } catch (err) {
        t.equal(err.message, 'errmsg', 'error has correct message');
      }
    });
    t.end();
  });
  t.end();
});
