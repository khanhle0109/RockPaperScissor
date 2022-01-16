
const resultText = document.querySelector(".result-text");
const yourScore = document.querySelector(".your-score");
const computerMagic = document.querySelector(".computer-score")


function  computerPlay(){
   let randomNumber = Math.floor(Math.random() * 3);
 if (randomNumber == 0){
     return "Rock"; }
 else if (randomNumber==1){
     return "Paper";
 }
 else if (randomNumber==2){
     return "Scissors";
 }
 }
// function game(){
//     let computerSelection = computerPlay();
//     let playerSelection= "Rock";
//     console.log(playRound(playerSelection, computerSelection)); 
// }
    
    let playerScore = 0
    let computerScore = 0

function reset() {
    playerScore = 0
    computerScore = 0
    // resultText.textContent = "";
    yourScore.textContent = 0;
    computerMagic.textContent = 0;
   
    
}


 function playRound(playerSelection, computerSelection) {   
    //  if( playerScore == 5){
    //      resultText.textContent = "Hello"
    //      playerScore = 0;
    //      return;
    //  }
    //  else if (computerScore == 5){
    //      computerScore = 0;
    //      return;
    //  }
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "Paper"){

        if(playerScore == 5) {
            resultText.textContent = "You win"
            reset();
            return;
        }   else if (computerScore == 5){
            resultText.textContent = "Computer wins"
            reset();
            return;
        }
  
        }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors"){
        if(playerScore == 5) {
            resultText.textContent = "You win"
            reset();
            return;
        }   else if (computerScore == 5){
            resultText.textContent = "Computer wins"
            reset();
            return;
     } 
        playerScore++;
        yourScore.textContent = playerScore;
       
        return "Player wins";}
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors"){
        if(playerScore == 5) {
            resultText.textContent = "You win"
           reset();
            return;
        }   else if (computerScore == 5){
            resultText.textContent = "Computer wins"
            reset();
            return;
     } 
        computerScore++;
        computerMagic.textContent = computerScore;
        
        return "Computer wins";}
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock"){
        if(playerScore == 5) {
            resultText.textContent = "You win"
            reset();
            return;
        }   else if (computerScore == 5){
            resultText.textContent = "Computer wins"
            reset();
            return;
     } 
        playerScore++;
        yourScore.textContent = playerScore;
        
        return "Player wins";}
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper"){
        if(playerScore == 5) {
            resultText.textContent = "You win"
            reset();
            return;
        }   else if (computerScore == 5){
            resultText.textContent = "Computer wins"
            reset();
          
            return;
     } 
        playerScore++;
        yourScore.textContent = playerScore;
        
        return "Player wins";}
    else if (playerSelection.toLowerCase() == "scissors"  && computerSelection == "Rock"){
        if(playerScore == 5) {
            resultText.textContent = "You win"
            reset();
            return;
        }   else if (computerScore == 5){
            resultText.textContent = "Computer wins"
            reset();
            return;
     } 
        computerScore++;
        computerMagic.textContent = computerScore;
        return "Computer wins" ;}
    else {
        return "Tie";
    }
    
        
}
// game()

// console.log (playRound(playerSelection,computerSelection))



 const rockButton = document.querySelector(".rock")
 rockButton.addEventListener("click", () => console.log(playRound("rock", computerPlay())));

 const scissorsButton = document.querySelector(".scissors")
 scissorsButton.addEventListener("click", () => console.log(playRound("scissors", computerPlay())));

 const paperButton = document.querySelector(".paper")
 paperButton.addEventListener("click", () => console.log(playRound("paper", computerPlay())));


