// const display = document.getElementById("display");

// function appendToDisplay(input) {
//   display.value += input;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display("error");
//   }
// }



// all numbers

function appendToDisplay(input) {
  display.value += input; // value to the display
}


function clearDisplay() {
  display.value = ""; 
}

function calculate() {
  const input = display.value; // "1+2+3"

  let numbers = []; // store numbers
  let operators = []; //store operators
  let currentNumber = ""; 

  // STEP 1: Split numbers and operators
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    // If  number
    if ((char >= "0" && char <= "9") || char === ".") {
      currentNumber += char; 
    }
 
    else if ("+-*/".includes(char)) {
      numbers.push(parseFloat(currentNumber)); // Save number
      operators.push(char); // Save operator
      currentNumber = ""; // Reset number
    }
  }


  numbers.push(parseFloat(currentNumber));


  let result = numbers[0];

  operators.forEach((op, index) => {
    const nextNumber = numbers[index + 1];

    if (op === "+") {
      result += nextNumber;
    }
    if (op === "-") {
      result -= nextNumber;
    }
  });
  display.value = result;
}

function toggleSign() {

  let value = display.value;

 
  if (value === "") return;


  // Split everything into characters
  let arr = value.split("");


  let i = arr.length - 1;

  
  while (i >= 0 && ((arr[i] >= "0" && arr[i] <= "9") || arr[i] === ".")) {
    i--;
  }

  if (arr[i] === "-") {

    arr.splice(i, 1);
  } else {
   
    arr.splice(i + 1, 0, "-");
  }

 
  display.value = arr.join("");
}
