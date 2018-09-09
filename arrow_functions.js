const elements = ['Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon'];

const functionExample = elements.map(function (element, index) {
  return `${index}: ${element}`;
});

const arrowExample1 = elements.map((element, index) => {
  return `${index}: ${element}`;
});

const arrowExample2 = elements.map(element => {
  return `${element}`;
});

const arrowExample3 = elements.map(element => `${element}`);

const arrowExample4 = elements.map(() => `No element`);

const printString = (string) => {
  console.log(`${string}`)
};

console.table(functionExample);
console.table(arrowExample1);
console.table(arrowExample2);
console.table(arrowExample3);
console.table(arrowExample4);

printString('String');