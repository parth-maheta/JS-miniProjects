let randomNumber = Math.floor(Math.random() * 100 + 1);

const Input = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesSlot = document.querySelector(".guesses");
const Remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startAgain = document.querySelector(".resultParas");

const para = document.createElement("p");
let prevGuessArray = [];
let playGame = true;
let n = 1;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(Input.value);
    validation(guess);
  });
}

function validation(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number!");
  } else if (guess < 1) {
    alert("Please enter a valid number!");
  } else if (guess > 100) {
    alert("Please enter a valid number between 1 and 100!");
  } else {
    prevGuessArray.push(guess);
    if (n === 11) {
      displayGuess(guess);
      displayMessage(`GAMEEE OVERR!! ,The random number was ${randomNumber}`);
      EndGame();
    } else {
      displayGuess(guess);
      check(guess);
    }
  }
}
function check(guess) {
  if (guess === randomNumber) {
    displayMessage(`YAYYY! YOU WON !!! YOU GUESSED RIGHT`);
  } else if (guess > randomNumber) {
    displayMessage("YOU GUESSED A NUMBER GREATER THAN THE RANDOM NUMBER");
  } else if (guess < randomNumber) {
    displayMessage(`YOU GUESS A number TOOO LOWER THAN THE RANDOM NUMBER`);
  }
}
function displayMessage(guess) {
  lowOrHi.innerHTML = `<h3>${guess}</h3>`;
}
function displayGuess(guess) {
  Input.value = "";
  guesSlot.innerHTML += `${guess}  `;
  n++;
  Remaining.innerHTML = `${11 - n}`;
}
function EndGame() {
  Input.value = "";
  Input.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h2 id="new">PLAY AGAIN!!!!</h2>`;
  startAgain.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("new");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuessArray = [];
    n = 1;
    guesSlot.innerHTML = "";
    Remaining.innerHTML = `${11 - n}`;
    Input.removeAttribute("disabled");
    startAgain.removeChild(p);
    playGame = true;
  });
}
