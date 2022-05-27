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

var spelerSpringt = false;
var snelheid = 10; 
//gras platform
platform1X = 0;
platform1Y = 600;
platform1W = 200;
platform1H = 125;
//grijze
platform2X = 300;
platform2Y = 500;
platform2W = 125;
platform2H = 20;


platform3X = 400;
platform3Y = 390;

platform4X = 565;
platform4Y = 290;

platform5X = 750;
platform5Y = 390;

platform6X = 850;
platform6Y = 500;
//gras platform
platform7X = 1080;
platform7Y = 600;

 

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

 

  // speler springen
if (spelerSpringt === false && keyIsDown(32)) { // spatie
    snelheid = 8; 
    spelerSpringt = true;
}
if (spelerSpringt === true) {
  spelerY = spelerY - snelheid;
  snelheid = snelheid - 0.1;
}
  // stopt
  if (spelerSpringt === true && 
      spelerY > platform2Y - 75 && spelerY < platform2Y - 55 && 
      spelerX > platform2X && spelerX < platform2X + 125) {
    spelerSpringt = false;
    spelerY = platform2Y - 75; // set speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform3Y - 75 && spelerY < platform3Y - 55 && 
      spelerX > platform3X && spelerX < platform3X + 125) {
    spelerSpringt = false;
    spelerY = platform3Y - 75; // set speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform4Y - 75 && spelerY < platform4Y - 55 && 
      spelerX > platform4X && spelerX < platform4X + 125) {
    spelerSpringt = false;
    spelerY = platform4Y - 75; // set speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform5Y - 75 && spelerY < platform5Y - 55 && 
      spelerX > platform5X && spelerX < platform5X + 125) {
    spelerSpringt = false;
    spelerY = platform5Y - 75; // set speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform6Y - 75 && spelerY < platform6Y - 55 && 
      spelerX > platform6X && spelerX < platform6X + 125) {
    spelerSpringt = false;
    spelerY = platform6Y - 75; // set speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform7Y - 75 && spelerY < platform7Y + 125 && 
      spelerX > platform7X && spelerX < platform7X + 200) {
    spelerSpringt = false;
    spelerY = platform7Y - 75; // set speler bovenop platform

  }
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
   if (spelerY > 650) { 
   console.log ("botsing"); 
}

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
  fill(119, 79, 39); //bruin
  rect(platform1X, platform1Y, platform1W, platform1H);
  fill(79, 107, 24);
  rect(platform1X, platform1Y, platform1W, 30); //groen

  // grijze platformen
  fill(131, 139, 131);
  rect(platform2X, platform2Y, platform2W, platform2H);

  fill(131, 139, 131);
  rect(platform3X, platform3Y, platform2W, platform2H);
  
  fill(131, 139, 131);
  rect(platform4X, platform4Y, platform2W, platform2H);
  
  fill(131, 139, 131);
  rect(platform5X, platform5Y, platform2W, platform2H);

  fill(131, 139, 131);
  rect(platform6X, platform6Y, platform2W, platform2H);

  fill(119, 79, 39); //bruin
  rect(platform7X, platform7Y, platform1W, platform1H);
  fill(79, 107, 24);
  rect(platform7X, platform7Y, platform1W, 30); // groen

  
  // vijand

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 100);

  fill("black");
  ellipse(spelerX, spelerY + 75, 10, 10);
  
  // punten en health
  /*
  fill("yellow");
  ellipse( 500, 400, 20, 20); */   
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
    // teken game-over scherm zwart

  }
}
