"use strict";

// a const can be an object

const foo = { bar: "baz" };

// but you still cannot reassign it
// const foo = 9 // fail

// but you can update properties, just not the entire object
foo.bar = "foo"; // ok!


m