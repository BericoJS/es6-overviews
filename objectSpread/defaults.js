let defaults = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}

// after

let a = {
  ...defaults,
  b: 60
};

console.log(a)