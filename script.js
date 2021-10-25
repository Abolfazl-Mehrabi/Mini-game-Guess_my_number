"use strict";
alert('Welcome !\n This game is Called "Guess My Number" ! \n\n You have to Guess the hidden number \n\n You have 5 lives So you can guess 5 times before you lose \n\n Good luck and Have Fun 😉')

// Making the correct answer of the game
var correctAnswer = Math.floor(Math.random()*25 +1) ;

// Add the Player's Lives at the begining of the round
document.querySelector(".left-life").innerHTML="5";
var life = Number(document.querySelector(".left-life").innerHTML);

// Getting the high score from local storage or setting it to 0
if(localStorage.getItem("userHighScore")==undefined) {
    document.querySelector(".highScore").innerHTML="0";
    var highScore = Number(document.querySelector(".highScore").innerHTML);
} else {
    var highScore = localStorage.getItem("userHighScore");
    document.querySelector(".highScore").innerHTML=  highScore;
}


// Event Listener for ENTER button
document.addEventListener("keyup",function(event){
    if (event.keyCode === 13) saveValue();
})

// a Value to check if the game is finished or not
var isFinished = false;

// the game function ; called when player press the ENTER or Check button
function saveValue(){
    if (!isFinished){

    if(userNumber=="") alert("Enter a Number Please !")

    var userNumber = Number(document.querySelector("input").value);

    if (userNumber <= 0 || userNumber > 25) document.querySelector(".bottom-text-2").innerHTML="⛔ The Answer is between 1 & 25 !";
    else {

    // When player Finds the correct answer
    if ( userNumber === correctAnswer ) {
        document.querySelector(".bottom-text-2").innerHTML="🎉 CORRECT NUMBER ! ";
        document.querySelector(".bottom-text-2").style.fontSize="2.5rem";
        document.querySelector("body").style.backgroundImage="linear-gradient(180deg, rgba(36,121,9,1) 0%, rgba(0,255,89,1) 100%)";
        document.querySelector("html").style.backgroundColor="rgba(0,255,89,1)";
        document.querySelector(".middle-text-1").innerHTML=correctAnswer;
        isFinished = true

        // Updating the highscore
        if ( life > highScore ) {
          highScore = life;
          localStorage.setItem("userHighScore",highScore)
          document.querySelector(".highScore").innerHTML= highScore ;
        }
    } else {

        // Every wrong Answer
        life--
        document.querySelector(".left-life").innerHTML=life;
        if(userNumber > correctAnswer){
            document.querySelector(".bottom-text-2").innerHTML="💔 Too High !";
        } else if (userNumber < correctAnswer) {
            document.querySelector(".bottom-text-2").innerHTML="💔 Too Low ! ";
            }
        }
    }

    // When player losses
    if(life==0){
        document.querySelector("html").style.backgroundColor="rgba(255,0,134,1)";
        document.querySelector("body").style.backgroundImage="linear-gradient(180deg, rgba(191,0,0,1) 0%, rgba(255,0,134,1) 100%)";
        document.querySelector(".bottom-text-2").innerHTML="💀 You Lose ! ";
        document.querySelector(".bottom-text-2").style.fontSize="2.5rem";
        isFinished = true
    }
    } else if (isFinished) {
        alert(("Press the 'Again!' button to Play again"))
    }
}
