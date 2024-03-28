
// Creo lista di email dentro array
const emails = ["ciao@gmail.com", "pippo@gmail.com", "topolino@libero.it", "luca@hotmail.it"];

// Chiedo all'utente la sua email
const userEmail = prompt("Dimmi la tua email");

// Creo una variabile globale tipo boolean
let flag = false;

// Creo ciclo for per entrare nell'array
for (let i = 0; i < emails.length; i++){

    if (userEmail === emails[i]) {
        flag = true;
    }

}

// Condizione finale per la stampa
if (flag == true) {
    console.log("email corretta");
} else {
    console.log("email sbagliata");
}
