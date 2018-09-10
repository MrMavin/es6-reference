function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1,2,3,4,5,6,7,8,9));

const components = ['motherboard', 'cpu', 'ram', 'gpu', 'ssh'];
const extraComponents = ['HTC Vive', 'XBOX Controller'];

const yourSetup = [...components, ...extraComponents];

console.log(yourSetup);
console.log(...yourSetup);