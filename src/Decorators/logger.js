'use strict';
function makeLogging(f, log) {
  return function(arg){
    log.push(arg);
    return f.call(this, arg);
  }
}