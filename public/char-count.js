function countCharacters(){
   const inputTextEl = document.getElementById("textArea");
    const typedText = inputTextEl.value;

   const count = typedText.length;
   const charLimit  =200;

  
    document.getElementById("charCount").innerText = `${count} / ${charLimit}`;




}