class MyClass {
  foo = "bar"

  printFoo() {
    console.log(this.foo)
  }
}

new MyClass().printFoo();
