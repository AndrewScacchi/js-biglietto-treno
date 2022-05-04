// SCRIPT for EXERCISE

/* 
    Esercizio corrente
    Il programma dovrà chiedere all’utente il n km da percorrere e l’età
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.

*/

//prendiamo due dati numeri, controlliamo siano numero, forniamo avviso di errore in caso avverso

let age = parseInt(prompt("Qual'è la tua età?")); 
let distance = parseInt(prompt("Quanti kilometri devi percorrere?"));


// calcoliamo uno sconto sulla base dell'età
let discount;
if (age <= 17) {
    discount = 0.8;
} else if (age >= 65) {
    discount = 0.6;
} else {
    discount = 1;
}

let priceTicket = (distance * 0.21);
let priceDiscount = (priceTicket * discount);

if ( age <= 17){
    document.writeln(`Il tuo ticket costa ${priceDiscount} euro da un prezzo originale di ${priceTicket} euro, con un 20% di sconto!`);
} else if( age >= 65){
    document.writeln(`Il tuo ticket costa ${priceDiscount} euro da un prezzo originale di ${priceTicket} euro, con un 40% di sconto!`);
} else {
    document.writeln(`Il tuo ticket costa ${priceDiscount} euro da un prezzo originale di ${priceTicket} euro, con un 0% di sconto!`);
}
// document.writeln(`Il tuo ticket costa ${priceTicket} euri ` );


