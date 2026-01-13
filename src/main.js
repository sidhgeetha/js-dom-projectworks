// Header button alert
const buttonEl = document.getElementById("byBtn");
if (buttonEl) {
  buttonEl.setAttribute("onclick", 'alert("task completed by geetha")');
  buttonEl.onclick = function () {
    alert("completed by geetha");
  };
}

// Greeting Bot (Task 1)
const inputEl = document.getElementById("inputName");
const submitEl = document.getElementById("submit");
const resultEl = document.getElementById("greeting");

if (submitEl) {
  submitEl.addEventListener("click", (event) => {
    event.preventDefault();
    const inputName = inputEl.value.replace(/[0-9]/g, "");

    if (inputName === "") {
      alert("Please enter your name!");
      return;
    }

    console.log(`hello ${inputName} welcome to Cyberdude!`);
    resultEl.innerText = `hello ${inputName}, Welcome to CyberDude!`;
    resultEl.classList.add("text-white", "font-bold");
  });
}

// BG Color Switcher (Task 2)
const colourDivs = document.querySelectorAll("#coloursDiv div");
if (colourDivs.length) {
  colourDivs.forEach((div) => {
    div.addEventListener("click", () => {
      const color = window.getComputedStyle(div).backgroundColor;
      document.body.style.backgroundColor = color;
    });
  });

  const randomBtnEl = document.getElementById("random");
  randomBtnEl?.addEventListener("click", () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
  });

  // Dark Theme Toggle
  const moonEl = document.getElementById("moon");
  const sunEl = document.getElementById("sun");

  moonEl?.addEventListener("click", () => {
    document.body.style.backgroundColor = "#111827";
    document.body.style.color = "white";
  });

  sunEl?.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  });
}
