# Errata
[![Build Status](https://travis-ci.org/kjdelisle/errata.svg?branch=master)](https://travis-ci.org/kjdelisle/errata)

Easily create custom error types for better flow control and logging.

## Usage

Create your error constructor, and throw with it:
```
// Create an error prototype
var errata = require('errata');
var ImportantError = errata.create('ImportantError', 'IMPORTANT');

// throw it
throw new ImportantError('OH NOES!');
```

Get stack traces that include your custom error name:
```
ImportantError: OH NOES!
    at eval (eval at <anonymous> (/app/index.js:715:19), <anonymous>:12:11)
    at GeneratorFunctionPrototype.next (native)
    at /app/index.js:573:32
```
Pass in a function as part of the error definition to cut down on boilerplate:
```
var errata = require("errata");
var os = require('os');
var util = require('util');

var RolloutError = errata.create('RolloutError', 'MAYBE', function(obj) {
    if (obj instanceof ReallyImportantObject)
        this.severity = 'REALLYBAD';
    else
        this.severity = 'NOTSOBAD';
    this.message = util.format('Failure of severity %s!%s%s', this.severity,
        os.EOL, this.message);
});

function ReallyImportantObject() {
    // has some important function thingy in it.
}
try {
    throw new RolloutError(new ReallyImportantObject);
} catch (err) {
    console.log(err.stack);
}
```

## API

#### errata.create(name, [[code], [handler, ...]])

Create a new Error prototype with the given *name* as its object type.
An optional *code* may be specified so that all instances of the created
Error have the default error code.
An optional *handler* function may be provided that takes any remaining
parameters in. You may use this function as you see fit to modify the
behaviours and properties of the Error object.

You may also call `errata(name, [[code], [handler, ...]])` for the same
effect.

#### errata.loadConfig(filepath)

Loads a JSON file that defines a list of custom Errors, and returns an
Array of Error constructors.
