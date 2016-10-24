'use strict';
let calculator = {
  read: function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.b * this.b;
  }
};

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());

module.hot.accept();
