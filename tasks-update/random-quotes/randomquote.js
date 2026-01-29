document.body.style.backgroundColor = "black";

const quotes = [
  { quote: "To be or not to be", author: "-Shakespeare" },
  {
    quote: "We are not of caste or religion, we are one",
    author: "-Bharathiyar",
  },
  { quote: "You can make anything by writing", author: "-C.S. Lewis" },
];

const quoteBtnEl = document.getElementById("new-quote");
const quoteTextEl = document.getElementById("quote-text");
const authorEl = document.getElementById("quote-author");
const boxEl = document.getElementById("quote-box");

quoteBtnEl.addEventListener("click", () => {
  boxEl.classList.remove("hidden");
  quoteListEl.classList.add("hidden");

  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[quoteIndex];

  quoteTextEl.textContent = randomQuote.quote;
  authorEl.textContent = randomQuote.author;

  quoteTextEl.classList.add("text-lg", "font-medium", "text-slate-800");
  authorEl.classList.add("text-sm");

  // const boxEl = document.getElementById("quote-box");

  boxEl.classList.add(
    "bg-blue-100",
    "p-4",
    "rounded",
    "text-blue-700",
    "font-medium",
    "mt-6",
    "w-[700px]",
    "mx-auto",

    "items-center"
  );

  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 85%)`;
  boxEl.style.backgroundColor = randomColor;
});

// by author
const shakespeareQuotes = [
  "All the world’s a stage, and all the men and women merely players.",
  "A rose by any other name would smell as sweet.",
  "The better part of Valour, is Discretion.",
  "To thine own self be true.",
  "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
];

const image1El = document.getElementById("image1");
const quoteListEl = document.querySelector(".quote-list");

image1El.addEventListener("click", () => {
  // quoteBtnEl.classList.add("hidden");
  boxEl.classList.add("hidden");

  quoteListEl.classList = "";
  quoteListEl.innerHTML = "";

  shakespeareQuotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote;

    li.classList.add(
      "border",
      "border-slate-500",
      "bg-yellow-300",
      "text-slate-800",
      "px-12",
      "py-12",
      "mb-12",
      "w-[700px]",
      "rounded-xl"
    );

    quoteListEl.appendChild(li);
  });
});

const thirueQuotes = [
  "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு",
  "கற்றதனால் ஆய பயனென்கொல் வாலறிவன் நற்றாள் தொழாஅர் எனின்",
  "இனிய உளவாக இன்னாத கூறல் கனியிருப்பக் காய் கவர்ந்தற்று",
  "ஒழுக்கம் விழுப்பம் தரலான் ஒழுக்கம் உயிரினும் ஓம்பப் படும்",
  "அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார் என்பும் உரியர் பிறர்க்கு",
];

const image2El = document.getElementById("image2");

image2El.addEventListener("click", () => {
  // quoteBtnEl.classList.add("hidden");
  boxEl.classList.add("hidden");

  quoteListEl.classList = "";
  quoteListEl.innerHTML = "";

  thirueQuotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote;

    li.classList.add(
      "border",
      "border-slate-500",
      "bg-green-300",
      "text-slate-800",
      "px-12",
      "py-12",
      "mb-12",
      "w-[700px]",
      "rounded-xl"
    );

    quoteListEl.appendChild(li);
  });
});

// steve

const steveQuotes = [
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  "Innovation distinguishes between a leader and a follower.",
  "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
  "Stay hungry, stay foolish.",
];

const image3El = document.getElementById("image3");

image3El.addEventListener("click", () => {
  // quoteBtnEl.classList.add("hidden");
  boxEl.classList.add("hidden");

  quoteListEl.classList = "";
  quoteListEl.innerHTML = "";

  steveQuotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote;

    li.classList.add(
      "border",
      "border-slate-500",
      "bg-cyan-300",
      "text-slate-800",
      "px-12",
      "py-12",
      "mb-12",
      "w-[700px]",
      "rounded-xl"
    );

    quoteListEl.appendChild(li);
  });
});

// bharathi

const bharathiQuotes = [
  "யாதனின் யாதும் இல்லை; நீயே நீ!",
  "உலகம் தமிழர்க் கலைக்குத் தூய்மை வழங்கும்.",
  "எங்கும் எங்கும் தமிழின் விழிப்புணர்வு வேண்டும்.",
  "நீல மாலை போல் உயர்ந்து வளர்ந்திடுவோம்.",
];

const image4El = document.getElementById("image4");

image4El.addEventListener("click", () => {
  // quoteBtnEl.classList.add("hidden");
  boxEl.classList.add("hidden");

  quoteListEl.classList = "";
  quoteListEl.innerHTML = "";

  bharathiQuotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote;

    li.classList.add(
      "border",
      "border-slate-500",
      "bg-purple-400",
      "text-slate-800",
      "px-12",
      "py-12",
      "mb-12",
      "w-[700px]",
      "rounded-xl"
    );

    quoteListEl.appendChild(li);
  });
});
