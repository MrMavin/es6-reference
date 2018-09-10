const phoneHandler = {
  get(obj, value) {
    return obj[value]
      .replace(/(\d{2})(\d{3})(\d{2})(\d{2})(\d{3})/, '+$1 $2 $3 $4 $5');
  },

  set(obj, prop, value) {
    let phone = value.match(/[0-9]/g).join('');

    if (!phone.startsWith('39')){
      phone = '39' + phone;
    }

    obj[prop] = phone;
  }
};

const person = {};

person.phones = new Proxy({}, phoneHandler);
person.phones.work = '39 (388) 4920841';
person.phones.personal = '384 92 84 293';

console.log(person.phones);
console.log(person.phones.work);
console.log(person.phones.personal);