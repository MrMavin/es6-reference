class Animal {
  constructor(name) {
    this.name = name;
  }

  set nickname(nickname) {
    this.nick = nickname;
  }

  static info() {
    return 'This is an animal!';
  }

  get nickname() {
    return this.nick === undefined ? 'N/A' : this.nick;
  }

  get fullName() {
    return `${this.name} (${this.nickname})`;
  }
}

class Dog extends Animal{
  constructor(name) {
    super(name);
  }

  static info() {
    return 'This is a dog!';
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

const cooper = new Dog('Cooper');
const duke = new Dog('Duke');

console.log(cooper.fullName);

duke.nickname = 'Ducky';

console.log(duke.fullName);

cooper.bark();
duke.bark();

console.log(Animal.info());
console.log(Dog.info());