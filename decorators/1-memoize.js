let memoize = (target, name, descriptor) => {
  let cache = {};
  let original = descriptor.value;
  let memoized = (...args) => {
    let argsHash = args.join('#');
    if (!cache.hasOwnProperty(argsHash)) {
      cache[argsHash] = original.apply(target, args);
    }
    return cache[argsHash];
  };
  descriptor.value = memoized;
};

let foo = {
  fib(n) {
    return (n <= 2) ? 1 : (this.fib(n-1) + this.fib(n-2));
  },

  @memoize
  memoized_fib(n) {
    return (n <= 2) ? 1 : (this.memoized_fib(n-1) + this.memoized_fib(n-2));
  }
};

let then, now;
then = new Date().getTime();
foo.fib(45);
now = new Date().getTime();
console.log('fib(45) took', now - then, 'ms');

then = new Date().getTime();
foo.memoized_fib(500);
now = new Date().getTime();
console.log('memoized_fib(500) took', now - then, 'ms');
