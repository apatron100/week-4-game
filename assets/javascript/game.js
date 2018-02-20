


//  VARIABLES

//  Variables de Cristales
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

// Marcadores (Actual y Meta)
var currentScore = 0;
var targetScore = 0;


var winCount = 0;
var lossCount = 0;


// FUNCIONES


// Para obtner numero al azar
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Comenzando el juego
var startGame = function() {

  // Reset la meta
  currentScore = 0;

  // Define una meta nueva (entre 30 y 150)
  targetScore = getRandom(30, 150);

  // Ajustando los valores iniciales para cada cristal (entre 1 and 16)
  crystal.blue.value = getRandom(1, 16);
  crystal.red.value = getRandom(1, 16);
  crystal.green.value = getRandom(1, 16);
  crystal.yellow.value = getRandom(1, 16);

  // Ajustando HTML a los nuevos valores
  $("#your-score").html(currentScore);
  $("#target-score").html(targetScore);


  // Consola de pruebas
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
    " | Yellow: " + crystal.yellow.value);
  console.log("-----------------------------------");
};

// Verifcando resultado
var checkWin = function() {

  // Comparacion de resultado contra meta
  if (currentScore > targetScore) {
    alert("Lo Siento, Perdistes!");
    console.log("Perdiste");


    lossCount++;

    // Ajustando HTML para cuenta perdedora
    $("#loss-count").html(lossCount);

    // Reinicio del Juego
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Felicidades! Has Ganado!");
    console.log("Ganastes!");


    winCount++;

    // Ajustando HTML
    $("#win-count").html(winCount);

    // Reinicio del juego
    startGame();
  }

};

// Respondiendo al toque de los cristales
var addValues = function(clickedCrystal) {


  currentScore += clickedCrystal.value;

  // Ajustando HTML
  $("#your-score").html(currentScore);

  // checando la funcion de gane
  checkWin();


  console.log("Your Score: " + currentScore);
};




// Comenzando el juego.
startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});
