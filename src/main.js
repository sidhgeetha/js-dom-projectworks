// Header button alert
const buttonEl = document.getElementById("byBtn");
if (buttonEl) {
  buttonEl.setAttribute("onclick", 'alert("task completed by geetha")');
  buttonEl.onclick = function () {
    alert("completed by geetha");
  };
}

// const toggleEl  =document.getElementById("toggle-icon");

// const sunEl = document.getElementById("sun");

// const moonEl =document.getElementById("moon");

// const htmlEl = document.documentElement;

// toggleEl.addEventListener("click", ()=>{
//   htmlEl.classList.toggle("hidden");
//   sunEl.classList.toggle("hidden");
//   moonEl.classList.toggle("hidden");
// })

const toggleBtn = document.getElementById("toggle-icon");
const body = document.body;
const sunIcon = toggleBtn.querySelector(".sun");
const moonIcon = toggleBtn.querySelector(".moon");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
});
