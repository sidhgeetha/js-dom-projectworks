const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the icons and content
    const plusIcon = button.querySelector(".plus-icon");
    const minusIcon = button.querySelector(".minus-icon");
    const content = button.nextElementSibling;

    content.classList.toggle("hidden");

    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
  });
});



const sunEl = document.querySelector(".sun");
const moonEl = document.querySelector(".moon");
const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("toggle");


toggleBtn.addEventListener("click", ()=>{
     htmlEl.classList.toggle("dark");
     sunEl.classList.toggle("hidden");
     moonEl.classList.toggle("hidden");
})



