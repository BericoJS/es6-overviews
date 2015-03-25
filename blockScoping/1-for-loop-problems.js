"use strict";

// // this doesn't do what you'd expect
// for (var i = 1; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 50);
// }
//5, 5, 5, 5

// this is a hack
// for (var i = 1; i < 5; i++) {
//   (function(i){
//     setTimeout(function() {
//       console.log(i);
//     }, 50);
//   }(i));
// }
// 1, 2, 3, 4

// this is a juuust right
for (var i = 1; i < 5; i++) {
  let k = i;
  setTimeout(function() {
    console.log(k);
  }, 50);
}
// 1, 2, 3, 4
