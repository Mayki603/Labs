const users = [
  { name: 'Natasha', phone: '+380967087787' },
  { name: 'Angelina', phone: '+380952161377' },
  { name: 'Vitalik', phone: '+380686946213' },
];

const findPhoneByName1 = (name) => {
  for (const key of users) {
    if (key.name === name) return key.phone;
  }
};

const phone_numbers = {
  Natasha: '+380967087787',
  Angelina: '+380952161377',
  Vitalik: '+380686946213',
};

const findPhoneByName2 = (name) => phone_numbers[name];

console.log(findPhoneByName1('Natasha'));
console.log(findPhoneByName1('Angelina'));
console.log(findPhoneByName1('Vitalik'));