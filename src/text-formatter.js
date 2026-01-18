document.addEventListener("DOMContentLoaded", () => {
  const items = [
    {
      name: "Kayak",
      img: "https://fluidadventures.co.uk/wp-content/uploads/2022/05/single.png",
    },
    {
      name: "dinghy",
      img: "https://uk.boats.com/boat-content/files/Int-14-019.jpg",
    },
    {
      name: "skiff",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/18foot_skiff_Kiel2008.jpg",
    },
    {
      name: "ferrie",
      img: "https://www.niferry.co.uk/wp-content/uploads/2021/07/Brittany-Ferries-Hybrides-scaled.jpg",
    },
  ];

  const labelEl = document.getElementById("label");
  const inputEl = document.getElementById("textInput");
  const checkEl = document.getElementById("check");
  const upperEl = document.getElementById("upper");
  const lowerEl = document.getElementById("lower");
  const clearEl = document.getElementById("clear");
  const headerEl = document.getElementById("header");

  headerEl.className = "flex justify-between items-center w-full ";

  const scorArea = document.createElement("div");
  scorArea.className = "bg-black text-white  rounded-lg text-sm font-bold p-2";
  headerEl.appendChild(scorArea);

  const cardContainer = document.createElement("div");
  cardContainer.className = "flex justify-center items-center w-full";
  headerEl.insertAdjacentElement("afterend", cardContainer);

  const imgArea = document.createElement("img");
  imgArea.src = "/pen.png";
  imgArea.className = "flex justify-center w-100 h-100";
  cardContainer.appendChild(imgArea);

  const textArea = document.createElement("div");
  textArea.className =
    "w-full h-48 flex justify-center items-center bg-white rounded-xl shadow-inner border-4 border-blue-400 overflow-hidden";
  cardContainer.appendChild(textArea);

  let currentItem = null;
  let currentScore = 0;

  function startGame() {
    const randomIndex = Math.floor(Math.random() * items.length);
    currentItem = items[randomIndex];

    // Show image
    textArea.innerHTML = `<img src="${currentItem.img}" class="object-contain rounded">`;
    textArea.style.visibility = "visible";

    scorArea.innerText = `Points: ${currentScore}`;
    inputEl.value = "";
  }

  startGame();

  // Uppercase / Lowercase / Clear
  upperEl.addEventListener(
    "click",
    () => (inputEl.value = inputEl.value.toUpperCase())
  );
  lowerEl.addEventListener(
    "click",
    () => (inputEl.value = inputEl.value.toLowerCase())
  );
  clearEl.addEventListener("click", () => (inputEl.value = ""));

  // Check spelling
  checkEl.addEventListener("click", () => {
    if (inputEl.value.toLowerCase() === currentItem.name.toLowerCase()) {
      alert("Correct! ✅");
      currentScore += 10;
    } else {
      alert("Oops! Try again ✖");
    }
    startGame();
  });
});


