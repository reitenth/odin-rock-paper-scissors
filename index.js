const playerDisplay = document.querySelector('.player-choice');
const computerDisplay = document.querySelector('.computer-choice');
const resultDisplay = document.querySelector('.result-display');
const choices = ['Rock', 'Paper', 'Scissors'];

function playRound(humanSelection) {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  function getResult(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (humanSelection === 'Rock' && computerSelection === 'Scissors') ||
      (humanSelection === 'Paper' && computerSelection === 'Rock') ||
      (humanSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }

  const result = getResult(humanSelection, computerSelection);
  resultDisplay.textContent = result;
  playerDisplay.textContent = `USER: ${2}`;
  computerDisplay.textContent = `COMP: ${1}`;
  changeColor(resultDisplay);
}

function changeColor(element) {
  if (element.textContent === "It's a tie!") {
    element.style.backgroundColor = '#5E81AC';
  } else if (element.textContent === 'You win!') {
    element.style.backgroundColor = '#A3BE8C';
  } else if (element.textContent === 'You lose!') {
    element.style.backgroundColor = '#BF616A';
  } else {
    element.style.backgroundColor = '#fff';
  }
}
