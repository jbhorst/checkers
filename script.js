// variable for the start player //
let startPlayer;

// variable for the p tag in the html //
const playerTurn = document.querySelector('p');

// variables that target the class names of blue and red pieces //
const bluePieces = document.getElementsByClassName('player-blue');
const redPieces = document.getElementsByClassName('player-red');

// an event listener that sets the data type for the dragged piece //
document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
});

// an event listener that prevents the default event action from occuring //
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

// an event listener that prevents the default event action from occuring //
// and if the target class is "cell2", appends the player's piece to that spot //
// all of the black squares class names are "cell2" so pieces can only be dragged to those squares //
document.addEventListener("drop", function(event) {
  event.preventDefault();
  if ( event.target.className == "cell2" ) {
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
});

// a function for player blue's turn //
blueTurn = function () {
  // changes the paragraph to display blue's turn //
  playerTurn.textContent = "It's Blue's turn";
  // makes red pieces drag attribute false if it is true so only blue pieces can be moved //
  for (let i = 0; i < redPieces.length; i++) {
    if (redPieces[i].getAttribute("draggable") === "true"){
    redPieces[i].setAttribute("draggable", "false");
    }
  }
  // makes blue pieces drag attribute true again if it is false //
  for (let i = 0; i < bluePieces.length; i++) {
    if (bluePieces[i].getAttribute("draggable") === "false"){
    bluePieces[i].setAttribute("draggable", "true");
    }
  }
  // takes you to the redTurn function when a blue piece has been dropped on a black square //
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == "cell2") {
      redTurn();
    }
  })
};

// a function for player red's turn //
redTurn = function () {
  // changes the paragraph to display red's turn //
  playerTurn.textContent = "It's Red's turn";
  // makes blue pieces drag attribute false if it is true so only red pieces can be moved //
  for (let i = 0; i < bluePieces.length; i++) {
    if (bluePieces[i].getAttribute("draggable") === "true"){
    bluePieces[i].setAttribute("draggable", "false");
    }
  }
  // makes red pieces drag attribute true again if it is false //
  for (let i = 0; i < redPieces.length; i++) {
    if (redPieces[i].getAttribute("draggable") === "false"){
    redPieces[i].setAttribute("draggable", "true");
    }
  }
  // takes you to the blueTurn function when a red piece has been dropped on a black square //
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == "cell2") {
      blueTurn();
    }
  })
};

// function that randomizes players turns at start of the game //
function start() {
  let startPlayer = Math.random();
  if(startPlayer > 0.5) {
    redTurn();
    }else {
    blueTurn();
  }
}

start();
