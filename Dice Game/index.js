let player1Score = 0
let player2Score = 0
let player1Round = 1
let player2Round = 1
let player1Turn  =  true  

const player1Dice1 = document.getElementById("player1Dice1")
const player1Dice2 = document.getElementById("player1Dice2")
const player2Dice1 = document.getElementById("player2Dice1")
const player2Dice2 = document.getElementById("player2Dice2") 
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const playerTurnEvidence = document.getElementById("playerTurnEvidence")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const bonusBtn = document.getElementById("doubleOrNothingBtn")




function showRollBtn(){
    rollBtn.style.display = "block"
    bonusBtn.style.display = "none"
    resetBtn.style.display = "none"
}

function showDoubleOrNothingBtn() {
    rollBtn.style.display = "none"
    bonusBtn.style.display = "block" 
    resetBtn.style.display = "none"
}

function showResetBtn() {
    rollBtn.style.display = "none"
    bonusBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function player1DicesRemoveActive() {
    player1Dice1.classList.remove("active")
    player1Dice2.classList.remove("active")
}

function player1DicesAddActive(){
    player1Dice1.classList.add("active")
    player1Dice2.classList.add("active")
}

function player2DicesRemoveActive1(){
    player2Dice1.classList.remove("active1")
    player2Dice2.classList.remove("active1")
}

function player2DicesAddActive1(){
    player2Dice1.classList.add("active1")
    player2Dice2.classList.add("active1")
}
      

// Hook up a click event listener to the Roll Dice Button. 
 rollBtn.addEventListener("click", function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1
    const randomNumber2 = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += (randomNumber1 + randomNumber2)
        player1Scoreboard.textContent = player1Score
        player1Round ++
        player1Dice1.textContent = randomNumber1
        player1Dice2.textContent = randomNumber2
        player1DicesRemoveActive()
        player2DicesAddActive1()
        playerTurnEvidence.textContent = player1Round
        bonusBtn.style.display = "none"
        message.textContent = "Player 2   Turn:" + player2Round
       
    } else {
        message.textContent = "Player 2   Turn:1"
        player2Score += (randomNumber1 + randomNumber2)
        player2Scoreboard.textContent = player2Score
        player2Round ++
        player2Dice1.textContent = randomNumber1
        player2Dice2.textContent = randomNumber2
        player2DicesRemoveActive1()
        player1DicesAddActive()
        playerTurnEvidence.textContent= player2Round
        bonusBtn.style.display = "none"
        message.textContent = "Player 1 Turn:" + player1Round        
    }
    

    if ((randomNumber1 === 6)&&(player1Round > 2 && player2Round > 2)) {
        message.textContent = "Is double or nothing 🎲 "
        showDoubleOrNothingBtn()

    } else if (player1Score >= 100 ) {
        message.textContent = "Player 1 Won 🥳🥳🥳"
        showResetBtn()
        
    }  else if (player2Score >= 100 ) {
       message.textContent = "Player 2 Won 🎉🎉🎉"
       showResetBtn()
    }
    player1Turn = !player1Turn
})
 


bonusBtn.addEventListener("click", bonusOrNothing)



function bonusOrNothing() {

let randomNum = Boolean(Math.random() < 0.5)
    if(randomNum){ 
        player1Score = player1Score * 2
        player2Score = player2Score *2
        player1Scoreboard.textContent = player1Score  
        player2Scoreboard.textContent = player2Score 
        message.textContent = "Player 1 Turn:" + player1Round
        player1DicesRemoveActive()
        showRollBtn()
    } else {
        player1Score = 0 
        player2Score = 0  
        player2Scoreboard.textContent = player2Score 
        player1Scoreboard.textContent = player1Score 
        message.textContent = "Player 2 Turn:" + player2Round
        player2DicesRemoveActive1()
        showRollBtn()
    }
}
 


resetBtn.addEventListener("click", reset)

function reset() {
    player1Score = 0
    player2Score = 0
    player1Round = 1
    player2Round = 1 
    player1Turn = Boolean(Math.random() < 0.5)
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice1.textContent = "-"
    player1Dice2.textContent = "-"
    player2Dice1.textContent = "-"
    player2Dice2.textContent = "-"
    showRollBtn()

    if(player1Turn){
      message.textContent = "Player 1 Turn: 1 " 
    }else{
         message.textContent = "Player 2 Turn: 1 " 
    }
}