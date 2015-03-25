"use strict";

// this will fail because let isn't used inside a protected context

var x = 100;
switch (x) {
  case 100:
    let foo = 5;
    console.log(5);
    break;
  case 200:
    let bar = 6;
    console.log(6);
    break;
}

// this will work because it creates a block for each case

// var x = 100;
// switch (x) {
//   case 100: {
//     let foo = 5;
//     console.log(5);
//     break;
//   }
//   case 200: {
//     let bar = 6;
//     console.log(6);
//     break;
//   }
// }