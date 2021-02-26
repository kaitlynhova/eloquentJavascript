// NOTES
// Functions don't care about order of declaration but consts do
//console.log("say", doTheThing());

function doTheThing() {
  return "yasssss";
}

function multiplyer(factor) {
  return (number) => number * factor;
}

const double = multiplyer(2);

// console.log(double(5));

// MINIMUM

const getMin = (a, b) => {
  const array = [a, b].sort((a, b) => a - b);
  console.log(array[0]);
};

// getMin(8, 5);

// RECURSIVE EVEN CHECK

const isEven = (number) => {
  if (Math.abs(number) < 2) {
    console.log(number === 0 ? "Even" : "Odd");
  } else {
    const newValue = number < 0 ? number + 2 : number - 2;
    isEven(newValue);
  }
};

// isEven(-2);

// Count B's

const countBs = (string) => {
  const stringArray = string.split("");
  let stringValues = {};
  stringArray.forEach((letter) => {
    if (stringValues[letter]) {
      stringValues[letter] = stringValues[letter] + 1;
    } else {
      stringValues[letter] = 1;
    }
  });

  console.log(stringValues["B"] ? stringValues["B"] : "nah");
};

//countBs("bloloooool");

// Count a given letter

const countALetter = (string, searchedLetter) => {
  const stringArray = string.split("");
  let stringValues = {};
  stringArray.forEach((letter) => {
    if (stringValues[letter]) {
      stringValues[letter] = stringValues[letter] + 1;
    } else {
      stringValues[letter] = 1;
    }
  });

  console.log(
    stringValues[searchedLetter] ? stringValues[searchedLetter] : "nah"
  );
};

//countALetter("string here", "h");
