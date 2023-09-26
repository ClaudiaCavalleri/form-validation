const cardHolderNameInput = document.querySelector('#cardholdername-input');
const cardHolderName = document.querySelector('#cardholdername');

const cardNumberInput = document.querySelector('#cardnumber-input');
const cardNumber = document.querySelector('#card-number');

const monthInput =document.querySelector(".exp-month");
const monthOutput = document.querySelector("#month");
const yearInput =document.querySelector(".exp-year");
const yearOutput = document.querySelector("#year");

const cvcInput = document.querySelector("#cvc");
const cvcOutput = document.querySelector("#cvcOutput");

const formContainer = document.querySelector(".form-container")
const form = document.querySelector("form")
const completedContainer = document.querySelector("#completed-container")
const confirmButton = document.querySelector("#confirm-button")
const continueButton = document.querySelector("#continue-button")


//To Do List
//-Visualizzare l'input sulle card memtre l'utente inserisce i dati
//-Validare l'input del nome, controllando che non ci siano numeri o caratteri speciali, solo testo e prima lettera maiuscola
//-Validare l'inpout del numero della carta consentendo l'inserimento solo di numeri
//-fare in modo che gli spazi bianchi vengano rispettati automaticamente
//-controllo su inpout della data di scadenza, che siano inseriti solo numeri validi
//-se la data è antecedente ad oggi, ritornare un messaggio di errore e ritorno del focus sulla casella
//-controllo sull'input del cvc, che sia solo numeri in formato valido
//--mantenere i dati visualizzati sulla carta anche dopo invio dati
//-all'invio dei dati nascondere il form e visualizzare la pagina di avvenuto pagamento
//-possibilià di inserire nuovamente i dati di un'altra carta.



function stampName() {
    const nameInput = cardHolderNameInput.value
    const upperCaseName = nameInput.toUpperCase()
    cardHolderName.innerHTML = `${upperCaseName}`
}

function stampNumber() {
    let numberInput = cardNumberInput.value
    // Rimuovi tutti gli spazi dall'input corrente
    numberInput = numberInput.replace(/\D/g, '');
    // Verifica che ci siano al massimo 16 cifre
    if (numberInput.length > 16) {
        numberInput = numberInput.slice(0, 16); // Tronca il numero a 16 cifre
    }
    // Aggiungi uno spazio ogni quattro cifre
    numberInput = numberInput.replace(/(\d{4})/g, '$1 ');
    cardNumberInput.value = numberInput 
    cardNumber.innerHTML = `${numberInput}`
}

function stampMonth() {
    const monthValue = monthInput.value
    if (monthValue.length > 2) {
        monthValue = monthValue.slice(0, 2); 
    }
    monthOutput.innerHTML = `${monthValue}`
}

function stampYear () {
    const yearValue = yearInput.value
    if (yearValue.length > 2) {
        yearValue = yearValue.slice(0, 2); 
    }
    yearOutput.innerHTML = `${yearValue}`
}

function stampCVC() {
    let cvcValue = cvcInput.value
    if (cvcValue.length > 3) {
        cvcValue = cvcValue.slice(0, 3); 
    }
    cvcInput.value = cvcValue
    cvcOutput.innerHTML = `${cvcValue}`
}

// Submit function with validation form
function submitForm(event) {
    event.preventDefault();

    // Convalida dei campi
    const cardHolderName = cardHolderNameInput.value.trim();
    const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // Rimuovi gli spazi
    const expMonth = parseInt(monthInput.value, 10);
    //const expYearInput = yearInput.value;
    //const expYear = parseInt(`20${expYearInput}`, 10); // Converti l'anno in formato a quattro cifre

    // Verifica che tutti i campi siano stati compilati
    if (cardHolderNameInput.value === '' || cardNumberInput.value === '' || isNaN(monthInput.value)  || isNaN(cvcInput.value)) {
        alert('Si prega di compilare tutti i campi.');
        return;
    }

    // Ottieni la data corrente
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 

    /*// Convalida la data di scadenza
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        alert('La carta è scaduta. Si prega di inserire una carta valida.');
        return;
    }*/

    // Se tutti i controlli passano, puoi inviare il modulo
    
    completedContainer.classList.remove('hidden')
    formContainer.classList.add('hidden')
}

function complete() {
    completedContainer.classList.add('hidden')
    formContainer.classList.remove('hidden')
    form.submit();
}

//Event Listener
cardHolderNameInput.addEventListener('input', stampName)
cardNumberInput.addEventListener('input', stampNumber)
monthInput.addEventListener('input', stampMonth)
//yearInput.addEventListener('input', stampYear)
cvcInput.addEventListener('input', stampCVC)

confirmButton.addEventListener('click', submitForm)
continueButton.addEventListener('click', complete)
