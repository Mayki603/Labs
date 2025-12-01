const rangeOdd = (start, end) => {
    const array = [];
    for (let a = start; a <= end; a++) {
        if (a % 2 !== 0) {
            array.push(a);
        }
    }
    return array;
};
console.log(rangeOdd(15, 30));