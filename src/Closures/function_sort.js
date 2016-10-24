'use strict';
function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}