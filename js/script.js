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
//let verify that age is a Num
if (isNaN(age)){
    alert("Questa età non è un valore accettato!");
    age = parseInt(prompt("Inserire una età in formato YY"));
} else {
    alert("Età registrata. Grazie");
}

let distance = parseInt(prompt("Quanti kilometri devi percorrere?"));
//let verify that distance is a Num
if (isNaN(distance)){
    alert("Questa distanza non è un valore accettato!");
    distance = parseInt(prompt("Inserire una distanza da percorrere in kilometri"));
} else {
    alert("Distanza registrata. Grazie");
}

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

//Let print something on screen depending on age range
if ( age <= 17){
    document.writeln(`Il tuo ticket costa ${priceDiscount} euro da un prezzo originale di ${priceTicket} euro, con un 20% di sconto! Perchè ti ta se un babbo!`);
} else if( age >= 65){
    document.writeln(`Il tuo ticket costa ${priceDiscount} euro da un prezzo originale di ${priceTicket} euro, con un 40% di sconto! Perchè ti ta se vecio!`);
} else {
    document.writeln(`Il tuo ticket costa ${priceDiscount} euro da un prezzo originale di ${priceTicket} euro, con uno 0% di sconto! Perchè fai schefe!`);
}



