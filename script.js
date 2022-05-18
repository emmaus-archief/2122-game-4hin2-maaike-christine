/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */


const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

const beweeglinks = 65;
const beweegrechts = 68;
const spatiebalk = 32;

/* var vijandX = */
var spelerX = 30; // x-positie van speler
var spelerY = 525; // y-positie van speler
/* var spelerSpringt = false;
   var snelheid = 10; */

platform1X = 0;
platform1Y = 600;
platform1W = 200;
platform1H = 125;


/*var img = */
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler lopen
  if(keyIsDown(beweeglinks)){
   spelerX = spelerX - 10;
  }

  if(keyIsDown(beweegrechts)){
    spelerX = spelerX + 10;
  }
 /*

  // speler springen
if (spelerSpringt === false && keyIsDown(32)) { // spatie
    snelheid = 10; 
    spelerSpringt = true;
}
if (spelerspringt === true) {
  spelerY = spelerY - snelheid;
  snelheid = snelheid - 0,1;
}
  // stopt
  if (spelerSpringt === true && spelerY > 610) {
    spelerSpringt = false;
    spelerY = 600;
    
  }

  */
  
  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
// if(spelerX - vijandX < 50 && vijandX - vijandY < 50 && spelerY - vijandY < 50 && vijandY - spelerY < 50) 
    //console.log ("botsing")
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill(178, 217, 255);
  rect(0,0,1280,720);
  
  // platform
  fill(119, 79, 39);
  rect(platform1X, platform1Y, platform1W, platform1H);
  fill(79, 107, 24);
  rect(0, 600, platform1W, 30);
  
  var x = 100
  var y = 100
 
  // vijand

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 100);

  fill("black");
  ellipse(spelerX, spelerY + 75, 10, 10);
  
  // punten en health
  fill("yellow");
  ellipse( 500, 400, 20, 20);    
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() { 
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
   
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    tekenAlles(); 
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
