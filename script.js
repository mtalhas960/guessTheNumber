// Sample Js Code
const message = document.querySelector(".message");
const numberDisplay = document.querySelector(".number");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(msg) {
  message.textContent = msg;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreDisplay.textContent = score;
  numberDisplay.textContent = "?";
  guessInput.value = "";
  displayMessage("Start guessing...");
  document.body.style.backgroundColor = "#222";
}

function checkGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 20) {
    displayMessage(
      "⛔️ Invalid input! Please enter a number between 1 and 20."
    );
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct guess! You win!");
    numberDisplay.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreDisplay.textContent = 0;
    }
  }
}

checkButton.addEventListener("click", checkGuess);

againButton.addEventListener("click", resetGame);

resetGame();
