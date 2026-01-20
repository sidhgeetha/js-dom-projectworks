

// toggle
  const moonEl = document.getElementById("moon");
  const sunEl = document.getElementById("sun");
  const cardsEl = document.querySelectorAll(".book-card");

  sunEl.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

       cardsEl.forEach((card) => {
         card.style.backgroundColor = "yellow"; 
         card.style.color = "white";
       });
  });

  moonEl.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

        cardsEl.forEach((card) => {
          card.style.backgroundColor = "white";
          card.style.color = "black";
        });
  });




 
