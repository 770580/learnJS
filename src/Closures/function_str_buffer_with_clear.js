'use strict';
function makeBuffer(){
  let str = '';
  let buffer = function(value){
    if(value == undefined) {
      return str;
    }
    else {
      str += value;
    }
  };
  buffer.clear = function() {
    str = '';
  };
  return buffer;
}