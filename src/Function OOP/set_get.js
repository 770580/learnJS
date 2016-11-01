'use strict';
function User() {
  let firstName, surname;

  this.setFirstName = (str) => firstName = str;
  this.setSurname = (str) => surname = str;
  this.getFullName = () => `${firstName} ${surname}`;
}