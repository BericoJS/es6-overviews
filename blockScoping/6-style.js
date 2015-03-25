// implicit scoping
"use strict";

if (true) {

  // bunch of code

  let a = 4;
  let b = 5;

  if (b > 5) {
    // code
  }

  // bunch of code
}
























// explicit scoping

if (true) {

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
}

