'use strict';
function Calculator() {
  let operations = {
    '+': function(a, b) {
      return a + b;
    },
    '-': function(a, b) {
      return a - b;
    }
  }

  this.calculate = function(str) {
    let strA = str.split(' ');
    return operations[strA[1]](+strA[0], +strA[2]);
  }

  this.addMethod = function(operand, func) {
    operations[operand] = func;
  }
}