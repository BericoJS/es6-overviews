let a = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}

let b = {
  e: 50,
  f: 60,
  g: 70,
  h: 80
}

let c = {
  ...a,
  ...b
}

console.log(c)
