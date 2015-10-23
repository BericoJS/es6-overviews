'use strict';

function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

var memoize = function memoize(target, name, descriptor) {
  var cache = {};
  var original = descriptor.value;
  var memoized = function memoized() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsHash = args.join('#');
    if (!cache.hasOwnProperty(argsHash)) {
      cache[argsHash] = original.apply(target, args);
    }
    return cache[argsHash];
  };
  descriptor.value = memoized;
};

var foo = _createDecoratedObject([{
  key: 'count',
  initializer: function initializer() {
    return 0;
  }
}, {
  key: 'fib',
  value: function fib(n) {
    this.count++;
    return n <= 2 ? 1 : this.fib(n - 1) + this.fib(n - 2);
  }
}, {
  key: 'memoized_fib',
  decorators: [memoize],
  value: function memoized_fib(n) {
    return n <= 2 ? 1 : this.memoized_fib(n - 1) + this.memoized_fib(n - 2);
  }
}]);

var then = undefined,
    now = undefined;
then = new Date().getTime();
foo.fib(45);
now = new Date().getTime();
console.log('fib(45) took', now - then, 'ms');
console.log('run count', foo.count);

then = new Date().getTime();
foo.memoized_fib(500);
now = new Date().getTime();
console.log('memoized_fib(500) took', now - then, 'ms');

