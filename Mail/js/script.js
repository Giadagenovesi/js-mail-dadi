// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const containerElem = document.querySelector(".container");
const mailAddress = ["giada.g@outllok.it", "andrea@gmail.com", "mariorossi@hotmail.it", "giorgio.verde@outlook.com", "anna-bianchi@gmail.it"]
console.log(mailAddress);

const userMail = prompt("Inserisci il tuo indirizzo mail per accedere");
// console.log(userMail);

// Per ogni mail dell'array
// //  SE è uguale a userMail
// //      stampo Account trovato, puoi accedere
// //  Altrimenti
// //      stampo Account non trovato, non puoi accedere
// 
let isFound = false;
 
for (let i = 0; i < mailAddress.length; i++) {
    const currentMail = mailAddress[i];
    // console.log(currentMail);
    if (currentMail === userMail) {
    isFound = true;
    } 
}

let message ="";
if (isFound === true) {
    console.log("Account trovato, puoi accedere :)");
    let message = "Account trovato, puoi accedere :)";
    containerElem.innerHTML += `<div class="box">${message}</div>`

} else {
    console.log("Account non trovato, ci dispiace non puoi accedere :(");
    let message = "Account non trovato, ci diaspiace non puoi accedere :(";
    containerElem.innerHTML += `<div class="box">${message}</div>`
}


