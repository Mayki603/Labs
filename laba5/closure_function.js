
function seq(...args) {
  let functions = [];
  if (args.length > 0 && typeof args[0] === "function") {
    functions.push(args.shift());
  }
  function zip(f) {
    if (typeof f === "function") {
      functions.push(f);
      return zip;
    } else {
      return unzip(functions.reverse(), f);
    }
  }
  return zip;
}

function unzip(functions, num) {
  for (f of functions) {
    num = f(num);
  }
  return num;
}

console.log(seq((x) => x + 7)((x) => x * 2)(5));

console.log(seq((x) => x * 2)((x) => x + 7)(5));

console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));