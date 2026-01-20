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
