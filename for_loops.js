Array.prototype.unwanted = () => {};

const elements = ['Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon'];

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}

elements.forEach(element => {
  console.log(element);
});

// for..in includes prototypes
for (const index in elements) {
  console.log(elements[index]);
}

for (const element of elements) {
  console.log(element);
}

for (const [key, element] of elements.entries()) {
  console.log(`${key} ${element}`);
}

// ---

let object = {
  name: 'Vincenzo',
  surname: 'Marragony',
  age: 20,
  printFullName: function() {
    console.log(`${this.name} ${this.surname}`);
  }
};

object.printFullName();

for(const key in object)
{
  console.log(key);
}

// Object is not iterable

try{
  for(const value of object)
  {
    console.log(value);
  }
}catch(e){console.error(e)}

// Object.keys() Object.values() Object.entries()

for(const [key, value] of Object.entries(object))
{
  console.log(`${key} ${value}`);
}