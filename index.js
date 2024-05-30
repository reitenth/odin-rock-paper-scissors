//Grab html button classes
const playerDisplay = document.getElementsByClassName('player-choice');
const computerDisplay = document.getElementsByClassName('computer-choice');
const resultDisplay = document.getElementsByClassName('result-display');

const choices = ['Rock', 'Paper', 'Scissors'];

//Play one round

function playRound(humanSelection) {
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  function getResult(humanSelection, computerSelection) {}

  const result = getResult();
  resultDisplay.textContent = result;

  playerDisplay.textContent = `PLAYER: ${humanSelection}`;
  computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
}

humanSelection === computerSelection;
if (humanSelection === computerSelection) {
  return "It's a tie!";
} else if (
  (humanSelection === 'rock' && computerSelection === 'scissors') ||
  (humanSelection === 'paper' && computerSelection === 'rock') ||
  (humanSelection === 'scissors' && computerSelection === 'paper')
) {
  return 'You Win!';
} else {
  return 'You Lose!';
}
}

/* //Play five rounds
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    console.log(result);

    if (result.includes('win')) {
      humanScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    } else {
      tieScore++;
    }
    console.log(
      'human score:',
      humanScore + ' computer score:',
      computerScore + ' tie score:',
      tieScore
    );
  }

  //final score
  if (humanScore > computerScore) {
    console.log('You win this time.');
  } else if (humanScore < computerScore) {
    console.log('You lose you loser.');
  } else {
    console.log("It's a tie this time");
  }
}
playGame();
*/
