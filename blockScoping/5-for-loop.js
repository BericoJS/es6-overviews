"use strict";
let i;
for (i = 1; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 50);
}
console.log("Value of i is", i);
