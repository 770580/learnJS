'use strict';
function Machine() {
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine() {
  Machine.apply(this, arguments);

  //let waterAmount = 0;

/*  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };
*/
  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function() {
    if (!this._enabled) {
      throw new Error('CoffeeMachine is power off');
    }
    setTimeout(onReady, 1000);
  };

}

var coffeeMachine = new CoffeeMachine(10000);
console.log(coffeeMachine._enabled);
coffeeMachine.run(); // ошибка, кофеварка выключена!

module.hot.accept();
