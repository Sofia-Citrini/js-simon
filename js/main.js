const btnPlay = document.querySelector(".btn-play");


btnPlay.addEventListener("click", function () {
    const numberRandomList = numberRandom();

    stampaNumRandom(numberRandomList);

    setTimeout (function () {
        removerNumbers();

        setTimeout (function (){
            const numberUtenteList = numberUtente(numberRandomList);
            gameResult (numberUtenteList, numberRandomList);
        }, 200);
    }, 2000);
})

//generare numeri random 
function generateNumRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//array numeri random
function numberRandom() {
    const numberList = [];

    while (numberList.length < 5) {
        const num = generateNumRandom(1, 100);

        if (!numberList.includes(num)) {
            numberList.push(num);
        }
    }

    return numberList;
}

//stampa numeri random
function stampaNumRandom(numRandom) {
    const numContainer = document.querySelector(".num-container");

    numContainer.innerHTML = "";

    for (let i = 0; i < numRandom.length; i++) {
        const num = numRandom[i];

        const number = document.createElement("div");
        number.classList.add('number');
        number.textContent = num;
        numContainer.append(number);
    }
}

//nascondere (stop timer) i numeri
function removerNumbers () {
    const numContainer = document.querySelector(".num-container");
    numContainer.classList.add ('d-none');
}

//numeri utente con prompt
function numberUtente (numberRandomList) {
    const numUtenteList = [];

    for (let i = 0; i < 5; i++) {
        const numUtente = parseInt(prompt('Inserisci il numero'));

        if (numberRandomList.includes(numUtente)) {
            numUtenteList.push(numUtente);
        }
    }

    return numUtenteList;
}

//risultato del gioco
function gameResult (numeriUtenti, numeriRandom) {
    const result = document.querySelector('.result');

    if (numeriUtenti.length === numeriRandom.length) {
        result.innerHTML = ('Tutti i numeri sono stati indovinati');
    } else if (numeriUtenti.length === 0) {
        result.innerHTML =('Nessun numero é stato indovianto');
    } else {
        result.innerHTML = (`sono stati indovinati ${numeriUtenti.length} numeri: ${numeriUtenti.join(',')}`);
    }
}