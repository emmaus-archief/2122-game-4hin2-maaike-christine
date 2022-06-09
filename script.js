
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
const UITLEG = 3;
const GEWONNEN = 4;
var spelStatus = UITLEG;

const beweeglinks = 65;
const beweegrechts = 68;
const spatiebalk = 32;
const R = 82;
const enter = 13;
const O = 79;

var vijandX = 100;
var vijandY = 200;
var vijandX2 = 1080;
var vijandY2 = 500;
var spelerX = 30; // x-positie van speler
var spelerY = 525; // y-positie van speler

var spelerSpringt = false;
var snelheid = 10; 

var img_namenlijst = ['img/gameover.PNG', 'img/uitleg.PNG', 'img/youwon.PNG', 'img/finish.jpeg']; // plaatjes
var img_lijst =[]; // wordt gevuld in preload()

var HP = 25;

// gras platform
platform1X = 0;
platform1Y = 600;
platform1W = 150;
platform1H = 125;

// grijze platformen
platform2X = 400;
platform2Y = 650;
platform2W = 110;
platform2H = 20;

platform3X = 700;
platform3Y = 570;

platform4X = 920;
platform4Y = 480;

platform5X = 590;
platform5Y = 390;

platform6X = 850;
platform6Y = 300;

// gras platform
platform7X = 1130;
platform7Y = 200;
platform7W = 150;
platform7H = 750;


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
    snelheid = 5; 
    spelerSpringt = true;
}
if (spelerSpringt === true) {
    spelerY = spelerY - snelheid;
    snelheid = snelheid - 0.18;
}
  // stopt springen
if (spelerSpringt === true && 
      spelerY > platform1Y - 75 && 
      spelerY < platform1Y + 125  && 
      spelerX > platform1X && 
      spelerX < platform1X + 200) {
      spelerSpringt = false;
      spelerY = platform1Y - 75; // zet speler bovenop platform

  }
  
  if (spelerSpringt === true && 
      spelerY > platform2Y - 75 && 
      spelerY < platform2Y - 55 && 
      spelerX > platform2X && 
      spelerX < platform2X + 125) {
      spelerSpringt = false;
      spelerY = platform2Y - 75; // zet speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform3Y - 75 && 
      spelerY < platform3Y - 55 && 
      spelerX > platform3X && 
      spelerX < platform3X + 125) {
      spelerSpringt = false;
      spelerY = platform3Y - 75; // zet speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform4Y - 75 && 
      spelerY < platform4Y - 55 && 
      spelerX > platform4X && 
      spelerX < platform4X + 125) {
      spelerSpringt = false;
      spelerY = platform4Y - 75; // zet speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform5Y - 75 && 
      spelerY < platform5Y - 55 && 
      spelerX > platform5X && 
      spelerX < platform5X + 125) {
      spelerSpringt = false;
      spelerY = platform5Y - 75; // zet speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform6Y - 75 && 
      spelerY < platform6Y - 55 && 
      spelerX > platform6X && 
      spelerX < platform6X + 125) {
      spelerSpringt = false;
      spelerY = platform6Y - 75; // zet speler bovenop platform

  }

  if (spelerSpringt === true && 
      spelerY > platform7Y - 75 && 
      spelerY < platform7Y + 125 && 
      spelerX > platform7X && 
      spelerX < platform7X + 200) {
      spelerSpringt = false;
      spelerY = platform7Y - 75; // zet speler bovenop platform

  }
  
  // vijand
  vijandY = vijandY + 8;

  if (vijandY > 720) {
      vijandY = 0;
  };

  if (vijandY < 1) {
      vijandX = random(100, 1100)
  };
  
  vijandY2 = vijandY2 + 8;

  if (vijandY2 > 720) {
      vijandY2 = 0;
  };

  if (vijandY2 < 1) {
      vijandX2 = random(100, 1100)
  };  
  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (vijandX - spelerX < 50 &&
    vijandX - spelerX > - 50 &&
    vijandY - spelerY < 75 &&
    vijandY - spelerY > - 75
  ) {
    console.log("botsing");
    HP = HP-1;
  }
  
if (vijandX2 - spelerX < 50 &&
    vijandX2 - spelerX > - 50 &&
    vijandY2 - spelerY < 75 &&
    vijandY2 - spelerY > - 75
  ) {
    console.log("botsing");
    HP = HP-1;
  }

  // gaat niet van de game af
if (spelerX < 25) {
  spelerX = spelerX + 10;
}
  
if (spelerX > platform7X - 20 && 
    spelerY > platform7Y + 30) {
  spelerX = spelerX - 10;
}    

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
  rect(platform7X, platform7Y, platform7W, platform7H);
  fill(79, 107, 24);
  image(img_lijst[3], platform7X, platform7Y, platform7W, 30); // groen

  
  // vijanden
  fill("red");
  ellipse(vijandX - 25, vijandY - 25, 30, 30)

  
  fill("red");
  ellipse(vijandX2 - 25, vijandY2 - 25, 30, 30)
  
  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 100);

  fill("black");
  ellipse(spelerX, spelerY + 75, 10, 10);
  
  // health
  /*
  fill("yellow");
  ellipse( 500, 400, 20, 20); */   

  // HP
  fill("black");
  textSize(35);
  text("health is "+ HP, 30, 30);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  var gameoverStatus = false;
  if (spelerY > 650) { 
    console.log ("de vloer is lava en ik sta erop");
    gameoverStatus = true;
  }
  if (HP < 1) {
    console.log ("tegen vijand");
    gameoverStatus = true;
  }
  return gameoverStatus;
}


  var checkGewonnen = function () {
  var gewonnenStatus = false
  if (spelerX > 1280 && spelerY < 200) { 
    console.log ("Je hebt gewonnen");
    gewonnenStatus = true;
 }
  return gewonnenStatus;
}

  // check of HP 0 is , of tijd op is, of ...

   
/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * preload
 * deze functie wordt één keer uitgevoerd voor setup
 * hier laden we de plaatjes met een array
 */
function preload() {
  for (var i = 0; i < img_namenlijst.length; i++) {
    img_lijst[i] = loadImage(img_namenlijst[i]);
  }
}


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
      if (checkGewonnen()) {
      spelStatus = GEWONNEN;
    }
  }
  
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm 
     console.log("game over")
     image(img_lijst[0],0,0, 1280, 720);
     if(keyIsDown(R)) {
    
      spelStatus = UITLEG;
    }
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm 
     console.log("uitleg")
     image(img_lijst[1],0,0, 1280, 720)
    if(keyIsDown(enter)){
      // reset game
      spelerX = 30;
      spelerY = 525;
      HP = 25;
     spelStatus = SPELEN;
  }
}

  if (spelStatus === GEWONNEN) {
    // teken finish scherm
     console.log("gewonnen")
     image(img_lijst[2],0,0, 1280, 720)
    if(keyIsDown(O)){
      // reset game
        spelStatus = UITLEG;
      }
  }
  
}