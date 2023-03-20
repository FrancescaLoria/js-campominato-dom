// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// CREO LA FUNZIONE PER GENERARE LE MIE BOX
const gridElement = document.querySelector(".grid");

//VARIABILE GLOBALE ( così posso usarla in altre funzioni )
let arrayBombs = [];

let userScore = 0;

function generateBombs(bombsRange) {
  // genero un ciclo while perchè effettivamente non so quante volte dovrò "ciclare" essendoci dei doppioni, possono essere poche le volte ma anche tante.
  while (arrayBombs.length < 16) {
    let x = Math.floor(Math.random() * bombsRange + 1);
    // ciclo for per stabilire se un determinato elemento è già presente dentro array
    let find = false;
    for (let i = 0; i < arrayBombs.length; i++) {
      // se il numero random è uguale all'elemento dell'array allora il mio find diventa true
      if (x === arrayBombs[i]) {
        find = true;
      }
    }
    // se l'elemnto è diverso allora find è uguale a false e si aggiunge alla lista di array
    if (find === false) {
      arrayBombs.push(x);
    }
  }

  console.log(arrayBombs);
}

function generateBoxes() {
  // le creo in modo che si svuotino quando clicco il bottone.
  gridElement.innerHTML = "";
  arrayBombs = [];
  // mi sono agganciata alla select e al valore della select
  const difficultySelect = document.querySelector(".difficulty-select").value;
  console.log(difficultySelect);
  // creo variabile numero di box
  let nubersOfBoxs = 0;
  let boxClass = "";
  // setto il numero di box
  if (difficultySelect == 0) {
    nubersOfBoxs = 100;
    boxClass = "easy";
  } else if (difficultySelect == 1) {
    nubersOfBoxs = 81;
    boxClass = "medium";
  } else {
    nubersOfBoxs = 49;
    boxClass = "hard";
  }

  generateBombs(nubersOfBoxs);

  for (let i = 1; i <= nubersOfBoxs; i++) {
    const boxElement = document.createElement("div");
    boxElement.classList.add("box");
    boxElement.classList.add(boxClass);
    boxElement.innerHTML = i;
    // metodo che agg. figli "box" (nel mio caso)
    gridElement.appendChild(boxElement);
    boxElement.addEventListener("click", activeBox);
  }
}

function activeBox() {
  let find = false;
  for (let i = 0; i < arrayBombs.length; i++) {
    if (arrayBombs[i] == this.textContent) {
      find = true;
    }
  }

  if (find) {
    this.classList.add("red");
  } else {
    this.classList.add("box-active");
    userScore++;
    let userScoreElement = document.querySelector(".score");
    userScoreElement.innerHTML = `IL TUO PUNTEGGIO: ${userScore}`;
  }
}

// RENDO ATTIVO IL BOTTONE AL CLICK
const playBtn = document.querySelector(".play-button");
playBtn.addEventListener("click", generateBoxes);
