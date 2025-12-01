const range = (begin, end) => {
  const len = end - begin;
  if (len < 0) return [];
  const array = [];
  for (let s = begin; s <= end; s++) {
    array.push(s);
  }
  return array;
};

console.log(range(15, 30));