/*function for start game*/
function start() {
    greenP();
    blueP();
}

/*grabs the p tags in the html*/
const infoText = document.querySelector('p');

/*function for green pieces*/
const greenP = function() {
  infoText.textContent = " ";
}

/*function for blue pieces*/
const blueP = function() {
  infoText.textContent = " ";
}

start();
