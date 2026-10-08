
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const message = document.querySelector('#message');
const xScore = document.querySelector('#x-score');
const oScore = document.querySelector('#o-score');
const drawScore = document.querySelector('#draw-score');
const squares = document.querySelectorAll('.square');
let gameOver = false;

const scores = {
  X: 0,
  O: 0,
  draw: 0
};

const winningLines = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];



let counter = 0

function count() {
  counter = counter + 1
  console.log('count:' + counter);
}


function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }


  console.log(switchPlayer);
  console.log(currentPlayer);
}


function playTurn(event) {
  const square = event.target;

  if (gameOver || square.textContent !== '') {
    return;
  }

  square.textContent = currentPlayer.textContent;
  const winner = checkWinner();

  if (winner) {
    gameOver = true;
    scores[winner] += 1;
    updateScores();
    message.textContent = `${winner} wins!`;
    disableSquares();
    return;
  }

  if (isBoardFull()) {
    gameOver = true;
    scores.draw += 1;
    updateScores();
    message.textContent = 'Draw!';
    disableSquares();
    return;
  }

  switchPlayer();
}


function checkWinner() {
  for (const line of winningLines) {
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;

    if (first !== '' && first === second && first === third) {
      return first;
    }
  }

  return null;
}

function isBoardFull() {
  return Array.from(squares).every((square) => square.textContent !== '');
}

function updateScores() {
  xScore.textContent = scores.X;
  oScore.textContent = scores.O;
  drawScore.textContent = scores.draw;
}

function disableSquares() {
  for (const square of squares) {
    square.disabled = true;
  }
}


resetButton.addEventListener('click', resetGame);

for (const square of squares) {
  square.addEventListener('click', playTurn)
}

function resetGame() {
  gameOver = false;
  message.textContent = 'winner';
  currentPlayer.textContent = 'X';

  for (const square of squares) {
    square.textContent = '';
    square.disabled = false;
  }
}