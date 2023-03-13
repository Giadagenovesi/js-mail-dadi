// Gioco dei dadi:
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);

//SE userNumber > computer number
    // stampo CONGRATULAZIONI, HAI VINTO!!
// ALTRIMENTI  
    // stampo RITENTA, SARAI PIÙ FORTUNATO!!
let result = "";

if (userNumber > computerNumber) {
    result = "CONGRATULAZIONI, HAI VINTO!!";
}else if (userNumber <= computerNumber){
    result = "RITENTA, SARAI PIÙ FORTUNATO!!";
}
console.log(result);

//STAMPO RISULTATI IN PAGINA

document.getElementById ('my-number').innerHTML = userNumber;
document.getElementById ('system-number').innerHTML = computerNumber;
document.getElementById ('winner').innerHTML = result;
