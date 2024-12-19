//vamos a crear la logica del juego

//Declaration de variables

//Generamos el numero aleatorio
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Guardamos una referencia a los elementos "p" de nuestro HTML
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi= document.querySelector(".lowOrHi");

//Guardamos la referencia a los elementos input con las
//classes especifidas
const guesSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Guardamos el numero de intentos y una variable para generar
//un boton de reset
let guessCount = 1;
let resetButton //Para crear una referencia a un boton.

//Funciones
//Son bloques de codigo reutilizable que escribimos una sola vez
//y podemos ejecutar una y otra vez, ahorrando la necesidad de 
//repetir codigo todo el tiempo.

function checkGuess(){
    let userGuess = Number(guessField.value);
    if(userGuess === randomNumber){
        lastResult.textContent="felicitari";
        lastResult.computedStyleMap.background="pink";
        lowOrHi.textContent=""
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent="game over";
        setGameOver();
    }
    else{
        lastResult.textContent="incorect";
        lastResult.computedStyleMap.backgroundColor="red";
        if(userGuess<randomNumber) {
            lowOrHi.textContent = "numaru e mic"
        }
        else if(userGuess<randomNumber) {
            lowOrHi.textContent = "numaru e mare"
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", resetGame");

    function resetGame(){
        guessCount = 1;

        const resetParas = document.querySelectorAll(".resultParas p");
        for ( let i = 0; i< resetParas. length; i++){
            resetParas[i].textContent = "";
        }
        
        resetButton.parentNode.remove. removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit. disabled = false;
        
    
    
    
    
    
    
    }
