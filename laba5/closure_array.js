
let array = () => {
  let elements = [];
  let access = (x) => elements[x];
  access.push = (x) => elements.push(x);
  access.pop = () => elements.pop();
  return access;
}

let arr = array();


arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Виводить: first
console.log(arr(1)); // Виводить: second
console.log(arr(2)); // Виводить: third

console.log(arr.pop()); // Виводить: third
console.log(arr.pop()); // Виводить: second
console.log(arr.pop()); // Виводить: first

console.log(arr.pop()); // Виводить: undefined