let realValue = "";
const display = document.getElementById("display");

function romanToNumber(roman) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100 };
  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    let current = map[roman[i]];
    let next = map[roman[i + 1]];

    if (next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

function numberToRoman(num) {
  const values = [
    [100, "C"],
    [50, "L"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (let [value, symbol] of values) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

function appendToDisplay(input) {
  realValue += input;
  display.value = realValue;
}

function clearDisplay() {
  realValue = "";
  display.value = "";
}

function calculate() {
  if (!realValue) {
    display.value = "Error";
    return;
  }

  const tokens = realValue.match(/[IVXLC]+|[+-]/g);
  console.log(tokens);
  if (!tokens) {
    display.value = "Error";
    return;
  }

  // Must be: numeral, operator, numeral, operator, ...
  if (tokens.length % 2 === 0) {
    display.value = "Error";
    return;
  }

  // Convert first Roman numeral to number
  let result = romanToNumber(tokens[0]);
  if (Number.isNaN(result)) {
    display.value = "Error";
    return;
  }

  // Loop through remaining tokens: operator → numeral → operator → numeral ...
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const numeral = tokens[i + 1];

    // Check if numeral exists
    if (!numeral) {
      display.value = "Error";
      return;
    }

    const value = romanToNumber(numeral);
    if (Number.isNaN(value)) {
      display.value = "Error";
      return;
    }

    // Do the calculation
    if (op === "+") result += value;
    else if (op === "-") result -= value;
    else {
      display.value = "Error";
      return;
    }
  }

  // Roman numbers cannot be zero or negative
  if (result <= 0) {
    display.value = "Error";
    return;
  }

  // Show result in Roman numerals
  display.value = numberToRoman(result);

  // Clear stored input for next calculation
  realValue = "";
}

function toNumber() {
  if (!realValue) return;

  try {
    const numberValue = romanToNumber(realValue);

    display.value = numberValue;

    realValue = numberValue.toString();
  } catch {
    //error
    display.value = "Error";
  }
}
