# Handlerr

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
