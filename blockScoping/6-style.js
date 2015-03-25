"use strict";
// not meant to be executed

// implicit scoping, not ideal.
// the existence of the let half way down the code block creates a block scope
// but the scope is for the entire block.  There is implied scope all the way to the
// top of the block

if (true) {
  // bunch of code
  // bunch of code
  // bunch of code
  let a = 4;
  let b = 5;
  if (b > 5) {
    // code
  }
  // bunch of code
  // bunch of code
  // bunch of code
}

// explicit scoping, ideal
// in this case the area requiring scoping is explicitly blocked off

if (true) {
  // bunch of code
  // bunch of code
  // bunch of code

  { let a, b;
    // bunch of code
    a = 4;
    b = 5;
    if (b > 5) {
      // code
    }
  }

  // bunch of code
  // bunch of code
  // bunch of code
}

