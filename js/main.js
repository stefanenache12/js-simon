const playButton = document.getElementById('play-button');
const numbersContainer = document.querySelector('.numbers');

const numbers = [];

playButton.addEventListener('click',
    function(){

        pushRandomNumbers();

        for (let j = 0; j < numbers.length; j++) {
            console.log(numbers[j]);

            let simonNumbers = document.createElement('div'); 
            simonNumbers.innerHTML = numbers[j];
            numbersContainer.append(simonNumbers);
            simonNumbers.classList.add('random-numbers');
            
        }

        setTimeout(
            guessTheNumbers,     
            2 * 1000     
        );

        setTimeout(
            promts,     
            3 * 1000     
        );

        
    }

)








/*FUNCTIONS*/

function pushRandomNumbers (){

    for (let i = 1; i < 6; i++) {
        let randomNumber = getRandomNumbers(1,10);
        numbers.push(randomNumber);  
        
    }
}

function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function guessTheNumbers (){

    numbersContainer.classList.add('d-none');
    
}

function promts (){
    prompt('numero?')
}