class Sound {
  constructor(sound) {
    this.sound = sound;
  }

  makeSound() {
    return this.sound;
  }
}

class Animal {
  constructor(name, specie, sound) {
    this.name = name;
    this.specie = specie;
    this.sound = new Sound(sound);
  }

  makeSound() {
    return `${this.name} the ${
      this.specie
    } makes a sound: ${this.sound.makeSound()}`;
  }
}

const dogSound = "Woof woof!";
const catSound = "Meow meow!";

const myDog = new Animal("Dora", "Dog", dogSound);
const myCat = new Animal("Sabrina", "Cat", catSound);

console.log(myDog.makeSound());
console.log(myCat.makeSound());
