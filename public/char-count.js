function countCharacters() {
  const inputTextEl = document.getElementById("textArea");
  const typedText = inputTextEl.value;
  inputTextEl.classList.add("p-2");

  const count = typedText.length;
  const charLimit = 200;
  const remaining = charLimit - count;

  const charCountEl = document.getElementById("charCount");
  charCountEl.classList.add("text-green-400", "text-sm");

  document.getElementById(
    "charCount"
  ).innerText = `you have remaning :${remaining}/ out of: ${charLimit}`;

  if (count > 200) {
    const alertEl = document.getElementById("alert");
       alertEl.classList.add("border-red-400", "text-sm");
    const boxEl = document.getElementById("box");
    alertEl.innerText = `you have reached minimum of 200 characters`;
    alertEl.classList.add("text-red-400", "text-sm");
    inputTextEl.value = typedText.slice(0, charLimit);
 
  }

  const boxEl = document.getElementById("box");
}

// function countWords() {
//   const innerTextEl = document.getElementById("textArea").value.trim();
//   const count = innerTextEl == "" ? 0 : innerTextEl.split(/\s+/).length;

//   document.getElementById("words").innerText=`words typed: ${count}`;
// }
