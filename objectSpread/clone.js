let a = {
  a:10,
  b:20,
  c:30
};

let b = a;

console.log(a === b);

a.a = 40;

console.log(a === b);

let c = {
  ...a
};

console.log(a === c);

