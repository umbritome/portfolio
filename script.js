
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');
const gameOver =  value = false ; 

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
  console.log('Event Square:', square);
  if (square.textContent === "" && gameOver === false ) {
    square.textContent = currentPlayer.textContent;
    checkWinner();
    switchPlayer();


  }

}


function checkWinner() {
  for (const line of winningLines) {
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;
    if (first !== '' && first === second && first === third )  {
      console.log(first + ' wins!' );
      
    }
  }
}

function gameLoop(event) {
  const square=event.target
  if (gameOver.value || square.textContent !==''){
    return;

    const winner = checkWinner();
  } 
}


resetButton.addEventListener('click', resetGame);

for (const square of squares) {
  square.addEventListener('click', playTurn)
}

function resetGame(event) { 

  
  for (const square of squares){
    square.textContent = '';
    currentPlayer.textContent = "X"
    gameOver.value = false
  }
  

}