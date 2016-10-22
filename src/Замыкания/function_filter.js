'use strict';
function filter(arr, func) {
  let result = [];
  arr.forEach(
    (a) => {
      if (func(a)) result.push(a);
    }
  );
  return result;
}

function inBetween(a, b) {
  return (x) => {
    return x >= a && x <= b;
  }
}

function inArray(arr) {
  return (x) => {
    return !!(~arr.indexOf(x));
  }
}