'use strict';

function makeLogging(f, log) {
  return function() {
    let args = [].slice.call(arguments);
    log.push(args);
    return f.apply(this, args);
  }
}