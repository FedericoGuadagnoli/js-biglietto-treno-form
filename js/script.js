console.log('JS OK');

//Scrivere un programma che chieda all’utente
// - Il numero di chilometri da percorrere
// - Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// 1 - Prendo gli elementi dalla pagina
// 2 - Aggancio l'event listener al bottone

// Nell'event listener
// - Recupero i valori dal form
// - Validazione
// - Calcolo il prezzo in base ai km
// - Verifico se devo applicare uno sconto
// - Formatto il prezzo a due decimali
// - Riempio tutti i punto con i giusti valori
// - Mostro il biglietto togliendo il dispaly none


// * --------------------------------------------------------

// Elementi del form
const name = document.getElementById('name');
const kms = document.getElementById('kms');
const age = document.getElementById('age');
const confirmButton = document.getElementById('confirm-button');
const resetButton = document.getElementById('reset-button');


// Elementi del ticket
const ticketSection = document.getElementById('ticket');
const passengerNameElement = document.getElementById('passenger-name');
const rateElement = document.getElementById('rate');
const coachElement = document.getElementById('coach');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');


// Event listener sul bottone
confirmButton.addEventListener('click', function(){
    // Recupero i valori dal form
    const nameValue = name.value.trim();
    const kmsValue = parseInt(kms.value.trim());
    const ageValue = age.value;  

    // Validazione
    if(!nameValue || isNaN(kmsValue) || kmsValue < 10){
      alert('Hai inserito valori non validi!');
      return;
    } 


    // Calcolo del prezzo base
    let rateName = 'Tariifa Ordinaria';
    let price = 0.21 * kmsValue;

    // Calcolo sconto
    if(ageValue === 'under'){
        price *= 0.8;
        rateName = 'Tariffa giovani';
    } else if (ageValue === 'over'){
        price *= 0.6;
        rateName = 'Tariffa Over 65';
    }
    

    //Arrotondo il prezzo
    price = price.toFixed(2) + '€';

    // Carrozza e PNR
    const coach = '9';
    const pnr = '94587';

    // Monto gli elementi nel biglietto
    passengerNameElement.innerText = nameValue;
    rateElement.innerText = rateName;
    coachElement.innerText = coach;
    pnrElement.innerText = pnr;
    priceElement.innerText = price;


    //Faccio comparire il bliglietto
    ticketSection.classList.remove('d-none');


});

