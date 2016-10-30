'use strict';
function applyAll() {
  let args = [].slice.call(arguments);
  return args[0].apply(args[0], args.slice(1));
}