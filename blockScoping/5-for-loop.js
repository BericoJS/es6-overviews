// special case for for loops, if you declare let in the for loop
// initializer, it is considered block scope.  If it is declared outside
// it will not work
"use strict";

// so this does not work (works just like a var would)
let i;
for (i = 1; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 50);
}
// 5, 5, 5, 5

// and this works
// for (let i = 1; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 50);
// }
// 1, 2, 3, 4

