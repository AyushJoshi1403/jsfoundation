console.log("Hello world");

class Animal {
  constructor(name) {
    this.name = name;
    }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}
