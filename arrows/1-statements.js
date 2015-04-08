"use strict";

let funct2 = function(a, b) {
  let c = a * b + a - b / a
  return c;
};

let funct = (a, b) => {
  let c = a * b + a - b / a
  return c;
};

// function keyword gone

console.log(funct(2, 10))
console.log(funct2(2, 10))