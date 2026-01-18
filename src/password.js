const inputEl = document.getElementById("input");
const characterEl = document.getElementById("eightCharacters");
const upperCaseEl = document.getElementById("upperCase");
const lowerCaseEl = document.getElementById("lowerCase");
const numberEl = document.getElementById("number");
const specialCharEl = document.getElementById("specialCharacter");

let validationCounter = 0;

inputEl.onkeyup = () => {
  const passwordGiven = inputEl.value;
  const lowerCaseLetter = /[a-z]/g;

  if (passwordGiven.match(lowerCaseLetter)) {
    lowerCaseEl.classList.add("text-green-500");
    lowerCaseEl.classList.remove("text-red-500");

    const checkIconEl = lowerCaseEl.querySelector(".checkIcon");
    checkIconEl.classList.remove("hidden");
    validationCounter++;
  } else {
    lowerCaseEl.classList.remove("text-green-500");
    lowerCaseEl.classList.add("text-red-500");
    const checkIconEl = lowerCaseEl.querySelector(".checkIcon");
    checkIconEl.classList.add("hidden");
  }

  //uppercase
  const upperCaseLetter = /[A-Z]/g;

  if (passwordGiven.match(upperCaseLetter)) {
    upperCaseEl.classList.add("text-green-500");
    upperCaseEl.classList.remove("text-red-500");

    const checkIconEl = upperCaseEl.querySelector(".checkIcon");
    checkIconEl.classList.remove("hidden");
    validationCounter++;
  } else {
    upperCaseEl.classList.remove("text-green-500");
    upperCaseEl.classList.add("text-red-500");
    const checkIcon = upperCaseEl.querySelector(".checkIcon");
    checkIcon.classList.add("hidden");
  }

  //number
  const number = /[0-9]/g;

  if (passwordGiven.match(number)) {
    numberEl.classList.add("text-green-500");
    numberEl.classList.remove("text-red-500");

    const checkIconEl = numberEl.querySelector(".checkIcon");
    checkIconEl.classList.remove("hidden");
    validationCounter++;
  } else {
    numberEl.classList.remove("text-green-500");
    numberEl.classList.add("text-red-500");
    const checkIcon = numberEl.querySelector(".checkIcon");
    checkIcon.classList.add("hidden");
  }

  //special cahr

  if (passwordGiven.length > 8) {
    characterEl.classList.add("text-green-500");
    characterEl.classList.remove("text-red-500");

    const checkIconEl = characterEl.querySelector(".checkIcon");
    checkIconEl.classList.remove("hidden");
    validationCounter++;
  } else {
    characterEl.classList.remove("text-green-500");
    characterEl.classList.add("text-red-500");
    const checkIcon = characterEl.querySelector(".checkIcon");
    checkIcon.classList.add("hidden");
  }

  //specia char
  const specialCharP = /[!@#$%^&*()_+\[\]{};:'",.<>/?|]/g;
  const messageEl = document.querySelector(".div-message");

  if (passwordGiven.match(specialCharP)) {
    specialCharEl.classList.add("text-green-500");
    specialCharEl.classList.remove("text-red-500");
    const checkIconEl = specialCharEl.querySelector(".checkIcon");
    checkIconEl.classList.remove("hidden");
    validationCounter++;
  } else {
    specialCharEl.classList.remove("text-green-500");
    specialCharEl.classList.add("text-red-500");
    const checkIcon = specialCharEl.querySelector(".checkIcon");
    checkIcon.classList.add("hidden");
  }

  console.log(validationCounter);
};

//password show/hide

const showEl = document.querySelector(".fa-eye");
const hideEl = document.querySelector(".fa-eye-slash");

showEl.addEventListener("click", () => {
  console.log("show -> hide");
  inputEl.type = "password";
  hideEl.classList.remove("hidden");
  showEl.classList.add("hidden");
});

hideEl.addEventListener("click", () => {
  console.log("hide -> show");
  inputEl.type = "text";
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
});
