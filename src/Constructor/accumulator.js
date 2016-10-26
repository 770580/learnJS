'use strict';
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function(){
    let val = +prompt('val', 0);
    this.value += val;
  };
}