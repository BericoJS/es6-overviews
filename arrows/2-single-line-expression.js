"use strict";

let funct = function( a, b ) { return a * b; };
let funct2 = ( a, b ) => a * b;
// no curlies around function body
// no return, it is implied
// only for single line expressions

console.log( funct( 11, 2 ) );
console.log( funct2( 11, 2) );