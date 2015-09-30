let a = {
  a: 10
};

let b = {
  b: 20
};

let c = {
  ...a,
  a: 7,
  z: 12,
  ...b,
  ...a
};

console.log(c)