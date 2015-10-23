'use strict';

function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

var loading = function loading(loadingVarName) {
  return function (target, name, descriptor) {
    var original = descriptor.value;
    descriptor.value = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      target[loadingVarName] = true;
      var ret = original.call(target, args);
      if (ret instanceof Promise) {
        ret.then(function () {
          return target[loadingVarName] = false;
        });
      } else {
        target[loadingVarName] = false;
      }
      return ret;
    };
  };
};

var foo = _createDecoratedObject([{
  key: 'isLoading',
  initializer: function initializer() {
    return false;
  }
}, {
  key: 'loadSomething',
  decorators: [loading('isLoading')],
  value: function loadSomething() {
    return new Promise(function (resolve, reject) {
      return setTimeout(resolve, 2000);
    });
  }
}]);

console.log('foo.isLoading is', foo.isLoading);
foo.loadSomething().then(function () {
  console.log('foo.isLoading is', foo.isLoading);
});
console.log('foo.isLoading is', foo.isLoading);

