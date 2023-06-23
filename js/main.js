const playButton = document.getElementById('play-button');
const restartButton = document.getElementById('restart-button');
const numbersContainer = document.querySelector('.numbers');
const userNumbersContainer = document.querySelector('.user-numbers');
const timerDuration = 10;
const displayTimer = document.getElementById("timer");

const pcNumbers = [];
const userNumbers = [];

playButton.addEventListener('click',
    function playButtonClick (){

        pushRandomNumbers(); // CREA E PUSH RANDOM NUMBERS IN  ARRAY PC NUMBERS

        for (let j = 0; j < pcNumbers.length; j++) {    //CREA GLI ELEMENTI DA INSERIRE NEL DOM
            
            let simonNumbers = document.createElement('div'); 
            simonNumbers.innerHTML = pcNumbers[j];
            numbersContainer.append(simonNumbers);
            simonNumbers.classList.add('random-numbers',('id-' + j));

            countdownTimer(timerDuration, displayTimer);  // PARTE IL TIMER IN PAGINA
        }

        setTimeout(                  // DOPO 12 SECONDI I PC NUMBERS SI NASCONDONO
            guessTheNumbers,     
            12 * 1000     
        );

        setTimeout(                 // DOPO 13 SECONDI VIENE CHIAMATA LA FUNZIONE PROMTS
            promts,     
            13 * 1000     
        ); 

        playButton.removeEventListener('click', playButtonClick);
    }
)


/*FUNCTIONS*/


//FUNZIONE CHE CREA E PUSH RANDOM NUMBERS IN  ARRAY PC NUMBERS
function pushRandomNumbers (){  

    for (let i = 1; i < 6; i++) {
        let randomNumber = getRandomNumbers(1,10);
        pcNumbers.push(randomNumber);  
    }
}


//FUNZIONE CHE GENERA RANDOM NUMBERS
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//FUNZIONE CHE NASCONDI I NUMEI DI SYMON DAL DOM
function guessTheNumbers (){
    numbersContainer.classList.add('d-none');
}

//FUNZIONE CHE CHIEDE I 5 NUMERI AL USER E GLI PUSH NELL ARRAY USER NUMBERS
function promts(){
    let endGameMsg = document.getElementById('end-game-msg');
    let yourNumbers = document.getElementById('your-numbers');

    for (let a = 0; a < 5; a++) {
        let userInput = parseInt(prompt('TI RICORDI I NUMERI DI SIMON?'));

        while (isNaN(userInput)) {
            userInput = parseInt(prompt('SIMON HA DETTO UN NUMERO, RIPROVA! TI RICORDI I NUMERI DI SIMON?'));
          }

        userNumbers.push(userInput);
        
        let userNumber = document.createElement('div');
        userNumbersContainer.append(userNumber);
        userNumber.innerHTML = userNumbers[a];
        userNumber.classList.add('random-numbers',('id-a' + a));
    }   

    numbersContainer.classList.remove('d-none');
    yourNumbers.classList.remove('d-none');
    endGameMsg.classList.remove('d-none');
    restartButton.classList.remove('d-none');
    restartButton.addEventListener('click',refreshPage);

    if (pcNumbers[0] == userNumbers[0] && 
        pcNumbers[1] == userNumbers[1] &&
        pcNumbers[2] == userNumbers[2] &&
        pcNumbers[3] == userNumbers[3] &&
        pcNumbers[4] == userNumbers[4]) {
        
        endGameMsg.innerHTML = 'BRAVO HAI INDOVINATO I NUMERI DI SIMON';
    
    }else{
        endGameMsg.innerHTML = 'PURTOPPO NON HAI INDOVINATO I NUMERI DI SIMON';
    }
    
    guestNumbers();

}


// FUNZIONE DEL TIMER NELLA PAGINA
function countdownTimer(duration, displayTimer) {
    let timer = duration;
    let minutes, seconds;

    let interval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayTimer.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            displayTimer.textContent = "RICORDI I NUMERI DI SIMON?";
        }
    }, 1000); 
}


// FUNZIONE CHE AGGIUNGE CLASSE SE I NUMERI SONO UGUALI
function guestNumbers(){

    let firstNumberSymon = document.querySelector('.id-0');
    let firstNumberUser = document.querySelector('.id-a0');
    let secondNumberSymon = document.querySelector('.id-1');
    let secondNumberUser = document.querySelector('.id-a1');
    let thirdNumberSymon = document.querySelector('.id-2');
    let thirdNumberUser = document.querySelector('.id-a2');
    let fourthNumberSymon = document.querySelector('.id-3');
    let fourthNumberUser = document.querySelector('.id-a3');
    let fifthNumberSymon = document.querySelector('.id-4');
    let fifthNumberUser = document.querySelector('.id-a4');
    
    if(pcNumbers[0] == userNumbers[0]){

        firstNumberSymon.classList.add('green-class');
        firstNumberUser.classList.add('green-class');

    }else{

        firstNumberSymon.classList.add('green-class');
        firstNumberUser.classList.add('red-class');
    }

    if(pcNumbers[1] == userNumbers[1]){

        secondNumberSymon.classList.add('green-class');
        secondNumberUser.classList.add('green-class');

    }else{

        secondNumberSymon.classList.add('green-class');
        secondNumberUser.classList.add('red-class');
    }

    if(pcNumbers[2] == userNumbers[2]){

        thirdNumberSymon.classList.add('green-class');
        thirdNumberUser.classList.add('green-class');

    }else{

        thirdNumberSymon.classList.add('green-class');
        thirdNumberUser.classList.add('red-class');
    }

    if(pcNumbers[3] == userNumbers[3]){

        fourthNumberSymon.classList.add('green-class');
        fourthNumberUser.classList.add('green-class');

    }else{

        fourthNumberSymon.classList.add('green-class');
        fourthNumberUser.classList.add('red-class');
    }

    if(pcNumbers[4] == userNumbers[4]){

        fifthNumberSymon.classList.add('green-class');
        fifthNumberUser.classList.add('green-class');

    }else{

        fifthNumberSymon.classList.add('green-class');
        fifthNumberUser.classList.add('red-class');
    }
}

function refreshPage() {
    location.reload();
}
