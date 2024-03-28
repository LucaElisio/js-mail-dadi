
// Genero un numero casuale da 1 a 6
const x = Math.floor(Math.random() * 6 + 1);
console.log(x);

// Genero un numero casuale da 1 a 6
const y = Math.floor(Math.random() * 6 + 1);
console.log(y);

// Creo condizione per stabilire il numero più alto
if (x > y) {
    console.log("vince il primo giocatore");
} else if (x < y) {
    console.log("vince il secondo giocatore");
} else {
    console.log("pareggio");
}