// LOOP A TRIANGLE
const loopATriangle = (length) => {
  let triangleLength = 1;
  while (triangleLength < length + 1) {
    console.log(new Array(triangleLength).fill("#").join(""));
    triangleLength = triangleLength + 1;
  }
};

loopATriangle(3);

// FIZZ BUZZ
const fizzBuzz = (number) => {
  let count = 0;
  while (count < number) {
    const isDivisible3 = count % 3 === 0;
    const isDivisible5 = count % 5 === 0;
    if (isDivisible3 && !isDivisible5) {
      console.log("fizz");
    }
    if (isDivisible5 && !isDivisible3) {
      console.log("buzz");
    }
    if (isDivisible3 && isDivisible5) {
      console.log("fizzBuzz");
    }
    if (!isDivisible5 && !isDivisible3) {
      console.log(count);
    }
    count = count + 1;
  }
};

// fizzBuzz(4);

// CHESSBOARD

const chessBoard = (size) => {
  let currentRow = 0;
  while (currentRow < size) {
    const stringLoop = currentRow % 2 === 0 ? " #" : "# ";
    console.log(new Array(size).fill(stringLoop).join(""));
    currentRow = currentRow + 1;
  }
};

// chessBoard(8);
