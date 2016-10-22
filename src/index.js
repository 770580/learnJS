'use strict';
function makeBuffer(){
  let str = '';
  return function(value){
    if(value == undefined) {
      return str;
    }
    else {
      str += value;
    }
  }
}

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!

module.hot.accept(); 
