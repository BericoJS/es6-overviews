"use strict";

var funct = function() {
  let x = 1;
  if (true) {
    let x = 2;
  }
  console.log(x);
}

funct();










































// function bodies do not have limitation of redeclaration