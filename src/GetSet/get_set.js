'use strict';
function User(fullName) {
  this.fullName = fullName;
  Object.defineProperty(this, 'firstName', {
    get: function() {
      return this.fullName.split(' ')[0];
    },

    set: function(value) {
      this.fullName = value + ' ' + this.lastName;
    }
  });
  Object.defineProperty(this, 'lastName', {
    get: function() {
      return this.fullName.split(' ')[1];
    },

    set: function(value) {
      this.fullName = this.firstName + ' ' + value;
    }
  });
}