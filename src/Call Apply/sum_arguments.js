'use strict';
function sumArgs() {
  let args = [].slice.call(arguments);
  return args.reduce( (sum, arg) => sum + arg );
}