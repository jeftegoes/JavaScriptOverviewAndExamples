class Animal {
  constructor(name, specie) {
    this.name = name;
    this.specie = specie;
  }

  makeSound() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "dog");
  }

  bark() {
    return `${this.name} barks: Woof woof!`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "cat");
  }

  meow() {
    return `${this.name} meows: Meow meow!`;
  }
}

const myDog = new Dog("Dora");
const myCat = new Cat("Sabrina");

console.log(myDog.makeSound());
console.log(myDog.bark());
console.log(myCat.makeSound());
console.log(myCat.meow());
