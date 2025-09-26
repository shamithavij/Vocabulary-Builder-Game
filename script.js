const words = [
  // ----- Animals -----
  { word: "elephant", hint: "The largest land animal", category: "Animals" },
  { word: "zebra", hint: "A black and white striped animal", category: "Animals" },
  { word: "kangaroo", hint: "An animal from Australia that hops", category: "Animals" },
  { word: "tiger", hint: "A big wild cat with orange and black stripes", category: "Animals" },
  { word: "monkey", hint: "Climbs trees and loves bananas", category: "Animals" },

  // ----- Places / Nature -----
  { word: "school", hint: "A place where students learn", category: "Places" },
  { word: "river", hint: "A natural water flow", category: "Places" },
  { word: "mountain", hint: "Very tall natural landform", category: "Places" },
  { word: "ocean", hint: "Covers most of the Earth with water", category: "Places" },
  { word: "forest", hint: "A large area with many trees", category: "Places" },
  { word: "island", hint: "Land surrounded by water", category: "Places" },
  { word: "desert", hint: "A very dry place with sand", category: "Places" },
  { word: "pyramid", hint: "A triangular structure in Egypt", category: "Places" },
  { word: "castle", hint: "A big fort where kings lived", category: "Places" },

  // ----- Objects -----
  { word: "computer", hint: "A device you are using right now", category: "Objects" },
  { word: "pencil", hint: "Used for writing and erasing", category: "Objects" },
  { word: "book", hint: "Contains pages and stories or knowledge", category: "Objects" },
  { word: "guitar", hint: "A string instrument", category: "Objects" },
  { word: "violin", hint: "A musical instrument with a bow", category: "Objects" },
  { word: "piano", hint: "A large keyboard instrument", category: "Objects" },
  { word: "candle", hint: "Gives light when it burns", category: "Objects" },
  { word: "helmet", hint: "Protects your head", category: "Objects" },
  { word: "bridge", hint: "Connects two places over water", category: "Objects" },

  // ----- Food -----
  { word: "pizza", hint: "An Italian dish with cheese and toppings", category: "Food" },
  { word: "milk", hint: "A white drink that comes from cows", category: "Food" },
  { word: "bread", hint: "You eat it with butter or jam", category: "Food" },
  { word: "candy", hint: "A small sweet treat", category: "Food" },
  { word: "icecream", hint: "A cold sweet dessert", category: "Food" },

  // ----- Games / Sports -----
  { word: "chess", hint: "A strategic board game", category: "Games" },
  { word: "soccer", hint: "Another name for football", category: "Games" },
  { word: "football", hint: "A popular sport played with a round ball", category: "Games" },
  { word: "rocket", hint: "Travels into space", category: "Games" },

  // ----- Misc / People -----
  { word: "teacher", hint: "One who teaches", category: "Misc" },
  { word: "doctor", hint: "Helps sick people get better", category: "Misc" },
  { word: "painter", hint: "Creates art using colors", category: "Misc" },
  { word: "language", hint: "A system of communication used by humans", category: "Misc" },
  { word: "knowledge", hint: "Facts, information, and skills acquired by education", category: "Misc" },
  { word: "dragon", hint: "A mythical creature that breathes fire", category: "Misc" },
  { word: "rainbow", hint: "Appears after rain with 7 colors", category: "Misc" },
  { word: "flower", hint: "It blooms and has petals", category: "Misc" },
  { word: "sunflower", hint: "A tall yellow flower that faces the sun", category: "Misc" },
  { word: "cloud", hint: "White and fluffy in the sky", category: "Misc" },
  { word: "butterfly", hint: "An insect with colorful wings", category: "Misc" },
  { word: "diamond", hint: "A precious stone, very shiny", category: "Misc" }
];

let selectedCategory = [];
let currentWord = {};
let displayedWord = "";
let score = 0;

// 🎵 Load sound effects
const correctSound = new Audio("win.wav");
const wrongSound = new Audio("wrong.wav");
const winSound = new Audio("vic.mp3");

// --- Category selection ---
function selectCategory(cat) {
  selectedCategory = words.filter(word => word.category === cat);
  document.getElementById("categorySelect").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  score = 0;
  document.getElementById("score").innerText = "Score: " + score;
  nextWord();
}

function newWord() {
  currentWord = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
  displayedWord = maskWord(currentWord.word);
  document.getElementById("word").innerText = displayedWord;
  document.getElementById("hint").innerText = "Hint: " + currentWord.hint;
  document.getElementById("message").innerText = "";
  document.getElementById("guessInput").value = "";
}

function maskWord(word) {
  return word.split("").map(ch => (Math.random() > 0.6 ? ch : "_")).join(" ");
}

function checkGuess() {
  const guess = document.getElementById("guessInput").value.toLowerCase();
  if (guess === currentWord.word) {
    document.getElementById("message").innerText = "🎉 Correct!";
    document.getElementById("message").style.color = "#27ae60";
    score += 10;
    document.getElementById("score").innerText = "Score: " + score;
    correctSound.play(); // 🎵 Play correct sound
  } else {
    document.getElementById("message").innerText = "❌ Wrong! Try again.";
    document.getElementById("message").style.color = "#e74c3c";
    wrongSound.play(); // 🎵 Play wrong sound
  }
}

function nextWord() {
  newWord();
}

function restartGame() {
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("categorySelect").style.display = "block";
}

