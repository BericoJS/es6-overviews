console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);

let a = {
  ...undefined,
  ...null,
  ...NaN
};

console.log(a)

