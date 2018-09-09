// Array

const details = ['Vincenzo', 'Marragony', 20];

const [name, surname, age] = details;

console.log(name);
console.log(surname);
console.log(age);

// Object with default data

const person = {
  name: 'Harry',
  surname: 'Potter',
  age: 22
};

const { name:personName, surname:personSurname, age:personAge = 18, hairColor:personHairColor = 'black' } = person;

console.log(personName);
console.log(personSurname);
console.log(personAge);
console.log(personHairColor);

// Function

function convertCurrency(amount){
  return {
    USD: amount * 0.76,
    GBP: amount * 0.53,
  };
}

const { USD, GBP } = convertCurrency(100);

console.log(USD);
console.log(GBP);

// Spread operator

const team = ['Trainer', 'Leader', 'Player1', 'Player2', 'Player3'];

const [trainer, leader, ...players] = team;

console.log(trainer);
console.log(leader);
console.log(players);

// Switching

let winner = 'Player 1';
let loser = 'Player 2';

console.log(winner);
console.log(loser);

[winner, loser] = [loser, winner];

console.log(winner);
console.log(loser);