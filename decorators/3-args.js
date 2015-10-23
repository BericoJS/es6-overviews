let loading = loadingVarName => (target, name, descriptor) => {
  let original = descriptor.value;
  descriptor.value = (...args) => {
    target[loadingVarName] = true;
    let ret = original.call(target, args);
    if (ret instanceof Promise) {
      ret.then(() => target[loadingVarName] = false);
    } else {
      target[loadingVarName] = false;
    }
    return ret;
  };
};

let foo = {
  isLoading: false,

  loadSomething() {
    return new Promise((resolve, reject) => setTimeout(resolve, 2000));
  }
};


console.log('foo.isLoading is', foo.isLoading);
foo.loadSomething().then(() => {
  console.log('foo.isLoading is', foo.isLoading);
});
console.log('foo.isLoading is', foo.isLoading);
