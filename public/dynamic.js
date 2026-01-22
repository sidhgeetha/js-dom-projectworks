const saladEl = document.getElementById("salad");

// saladEl.addEventListener("click" , () =>{
//     window.location.href = "biryani.html";
// })

const buttons = document.querySelectorAll(".add");
const inputEl = document.getElementById("dish-input");
const listEl = document.getElementById("dish-list");

const addDishEl = document.getElementById("add-dish");
const allDishesEl = document.querySelectorAll(".dish-name");

const cartCountEl = document.getElementById("cart-count");

const errorEl = document.getElementById("error-msg");

function updateCartCount() {
  const items = listEl.querySelectorAll("li").length;
  cartCountEl.textContent = items;
}


addDishEl.addEventListener("click", () => {
  const dishName = inputEl.value.trim();

 
  if (dishName === "") {
    errorEl.textContent = "Please enter a dish name";
      errorEl.classList.add("text-rose-100");

    return;
  }

  let found = false;

  for (let i = 0; i < allDishesEl.length; i++) {
    const menuDish = allDishesEl[i].textContent
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

    const inputDish = dishName.toLowerCase().replace(/\s+/g, " ").trim();

    if (menuDish.includes(inputDish)) {
      found = true;
      break;
    }
  }

  // error
  if (!found) {
    errorEl.textContent = "Dish not available in menu!";
    errorEl.classList.add("text-rose-100");
    return;
  }

  // Adding the to cart
  const li = document.createElement("li");
  li.textContent = dishName;
  li.className = "p-2 border-b";
  listEl.appendChild(li);

  // Clear text in thee input box, error m essage
  inputEl.value = "";
  errorEl.textContent = "";
  updateCartCount();
  listEl.classList.remove("hidden");
});

// Clear error when typing
inputEl.addEventListener("input", () => {
  errorEl.textContent = "";
});

//from card "add button"

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const dishCard = button.parentElement;
    const dishName = dishCard.querySelector(".dish-name").textContent;

    const li = document.createElement("li");
    li.textContent = dishName;
    li.className = "px-4 py-2 border-b text-black";
    listEl.appendChild(li);
    updateCartCount();

    inputEl.value = "";
  });
});

const cartEl = document.getElementById("cart");

cartEl.addEventListener("click", () => {
  listEl.classList.toggle("hidden");
});







//old try

// function updateCartCount() {
//   const items = listEl.querySelectorAll("li").length;
//   cartCountEl.textContent = items;
// }

// // through input
// addDishEl.addEventListener("click", () => {
//   console.log("Button clicked!");

//   const dishnameEl = inputEl.value.trim();
//   let found = false;
//   if (!dishnameEl) {
//     return;
//   }

//   for (let i = 0; i < allDishesEl.length; i++) {
//     if (allDishesEl[i].textContent.toLowerCase() === dishnameEl.toLowerCase()) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//   }
//   const li = document.createElement("li");
//   li.textContent = dishnameEl;
//   listEl.appendChild(li);
//   inputEl.value = "";
//   errorEl.textContent = "";
//   updateCartCount();
//   let qty = 0;
//   const quantity = document.createElement("span");
//   quantity.textContent = qty;
//   li.appendChild(quantity);
//   listEl.classList.appendChild(li);
// });

// inputEl.addEventListener("input", () => {
//   errorEl.textContent = "";
// });