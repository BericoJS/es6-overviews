let readonly = (target, key, descriptor) => {
  descriptor.writable = false;
};

class Widget {
  @readonly
  doSomething() {
    console.log('something has been done');
  }
}

let a = new Widget();
a.doSomething();
a.doSomething = () => console.log('narsa amalga oshirildi');
