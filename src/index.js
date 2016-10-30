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

function f(x) {
  return Math.random() * x;
}

f = makeCaching(f);

var a = f(1);
var b = f(1);

console.log(a == b);

module.hot.accept();
