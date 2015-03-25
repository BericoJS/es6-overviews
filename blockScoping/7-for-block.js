// Though it was part of early parts of the ES6 spec, this format was dropped.
// It is no longer supported.

"use strict";
let (b, c) { // fail
  b = 10;
  c = 100;
  if (c > b) {
    console.log("foo")
  }
}




