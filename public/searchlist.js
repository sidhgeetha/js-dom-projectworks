const inputEl = document.getElementById("search"); //finding search box
const items = document.querySelectorAll(".list"); //see all lists items with name class name given "list"

inputEl.addEventListener("input", function () {   //add even listener wehn type itesm to search , input 
  const value = inputEl.value.toLowerCase();           //chnage all to lovercase

  for (let i = 0; i < items.length; i++) {            //loop each item using loop
    const text = items[i].textContent.toLowerCase();   //read each items itesm[i], itesm[0] = first item

    if (text.includes(value)) {
      //if searched word is matching .inclued in list, than show only that item
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
      const showError = document.getElementById("error");
      showError.innerText=`no words found`;
      showError.classList.add("text-red-400" , "text-sm");
    }
  }
});
