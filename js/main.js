//generare 5 numeri casuali 
//salvo i numeri casuali in un array e li mostro nella pagina
//timer 30 secondi 
const btnPlay = document.querySelector(".btn-play");

btnPlay.addEventListener("click", function () {
   numberRandom();
})

function generateNumRandom (min, max){
    return Math.floor(Math.random () * (max - min + 1) ) + min;
}

function numberRandom () {
    const numContainer = document.querySelector(".num-container");
    const numberList = [];

    while (numberList.length < 5) {
        const num = generateNumRandom (1, 100);

        if (!numberList.includes(num)) {
            numberList.push(num);
        }

        const number = document.createElement("div");
        number.textContent = num;
        numContainer.append(number);
    }

    return (numberList);
}