// this shows the dangers of just globally replacing vars with lets.

// this (arguably bad) code works just fine.  It creates foo on the top level
// scope because the if blocks do not create their own scope
if (true) {
  var foo = 100;
} else {
  var foo = "huh?";
}
console.log(foo) // 100

// if you outright replace the vars with lets, you end up with this
// which does not work.
// "use strict";
// if (true) {
//   let foo = 100;
// } else {
//   let foo = "huh?";
// }
// console.log(foo) // fail