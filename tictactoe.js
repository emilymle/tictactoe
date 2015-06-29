var allSquares = document.querySelectorAll(".square");

var square1 = allSquares[0];
var square2 = allSquares[1];
var square3 = allSquares[2];
var square4 = allSquares[3];
var square5 = allSquares[4];
var square6 = allSquares[5];
var square7 = allSquares[6];
var square8 = allSquares[7];
var square9 = allSquares[8];

var playerCount = 0;

function moveX(){
  this.innerText = "X";
}

function moveO(){
  this.innerText = "O";
}

for(var i = 0; i < 9; i++){
  if (playerCount % 2 === 0){
    allSquares[i].addEventListener('click', moveX);
  } else {
    allSquares[i].addEventListener('click', moveO);
  }
  playerCount = playerCount + 1;
  // console.log(playerCount);
}
