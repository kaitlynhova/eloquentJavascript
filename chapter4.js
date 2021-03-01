const range = (start, end, step = 1) => {
  let returnArray = [start];
  let firstValue = returnArray[0];
  for (var i = 1; i < Math.abs(start - end) + 1; i++) {
    if ((firstValue + i) % Math.abs(step) === 0) {
      const value = step < 0 ? firstValue - i : firstValue + i;
      returnArray.push(value);
    }
  }
  return returnArray;
};

const sum = (numbers) => {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

// console.log(range(5, 2, -1));

const reverseArray = (array) => {
  let newArray = [];
  for (var i = array.length - 1; i > -1; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

//console.log(reverseArray([1, 2, 3, 4, 5));

const reverseArrayInPlace = (array) => {
  for (var i = 0; i < array.length; i++) {
    const value = array.splice(array.length - i - 1, 1)[0];
    array.push(value);
  }
  return array;
};

console.log(reverseArrayInPlace([6, 5, 4, 3, 2, 1]));
