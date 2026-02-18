function calculateTotal() {
  let total = 0;

  const selectedRadios = document.querySelectorAll(
    'input[type="radio"]:checked',
  );

  selectedRadios.forEach((radio) => {
    const label = radio.closest("label");
    if (label) {
      const priceSpan = label.querySelector("span.text-gray-600");
      if (priceSpan) {
        const amount = parseFloat(
          priceSpan.textContent.replace("£", "").replace(",", ""),
        );
        total += amount;
      }
    }
  });

  const totalElement = document.getElementById("totalAmount");
  totalElement.textContent = `£${total.toLocaleString()}`;
}

//check totall a radio button is changed
const allRadios = document.querySelectorAll('input[type="radio"]');
allRadios.forEach((radio) => {
  radio.addEventListener("change", calculateTotal);
});

// page load ,
calculateTotal();
