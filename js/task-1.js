

function isEnoughCapacity(products, containerSize) {
  const values = [];

  for ( let key in products ) {
    values.push(products[key])
  }
    let sum = 0;
    for ( let number of values) {
    sum += number;
  }
  return sum <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

