function* listPeople() {
  yield 'Albert';
  yield 'Isaac';
  yield 'Galileo';
}

let people = listPeople();

console.log(people.next());
console.log(people.next());
console.log(people.next());
console.log(people.next());

for(const person of listPeople()){
  console.log(person);
}