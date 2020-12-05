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

// function for start game //
function start() {
    redP();
    blueP();
}

// grabs the p tags in the html //
const infoText = document.querySelector('p');

// function for red pieces //
const redP = function() {
  infoText.textContent = " ";
}

// function for blue pieces //
const blueP = function() {
  infoText.textContent = " ";
}

start();
