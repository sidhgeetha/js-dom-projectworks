function countCharacters(){
   const inputTextEl = document.getElementById("textArea");
    const typedText = inputTextEl.value;

   const count = typedText.length;
   const charLimit =200;
    const remaining = charLimit-count;

  
    document.getElementById("charCount").innerText =`${remaining} characters you can type`;

  const charCountEl = document.getElementById("charCount");
  charCountEl.classList.add("text-red-400", "text-sm");



}