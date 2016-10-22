'use strict';
function makeBuffer(){
  let str = '';
  return function(value){
    if(value === undefined) {
      return str;
    }
    else {
      str += value;
    }
  }
}