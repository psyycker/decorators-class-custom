function injectHelloWorld(target){
  target.elements[0].initializer = () => {return "toto"}
}

@injectHelloWorld
class MyClass {
  foo = "bar"

  printFoo() {
    console.log(this.foo)
  }
}

new MyClass().printFoo();
