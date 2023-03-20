// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// CREO LA FUNZIONE PER GENERARE LE MIE BOX
const gridElement = document.querySelector(".grid");

function generateBoxes() {
  gridElement.innerHTML = "";
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
  console.log(this.textContent);
  this.classList.add("box-active");
}

// RENDO ATTIVO IL BOTTONE AL CLICK
const playBtn = document.querySelector(".play-button");
playBtn.addEventListener("click", generateBoxes);
