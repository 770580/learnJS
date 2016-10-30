'use strict';
function makeCaching(f) {
  let cache = {};
  return function(arg) {
    if ( !(arg in cache)) {
      cache[arg] = f.call(this, arg);
    }
    return cache[arg];
  }
}