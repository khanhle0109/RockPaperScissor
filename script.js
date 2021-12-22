
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
 console.log(computerPlay())
function game(){
    let computerSelection = computerPlay();
    let playerSelection= prompt("Rock,Paper or Scissor");
    console.log(playRound(playerSelection, computerSelection));
    

 function playRound(playerSelection, computerSelection) {
     
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "Paper"){
        return "Computer wins!"}
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissor"){
        return "Player wins"}
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissor"){
        return "Computer wins"}
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock"){
        return "Player wins"}
    else if (playerSelection.toLowerCase() == "scissor" && computerSelection == "Paper"){
        return "Player wins"}
    else if (playerSelection.toLowerCase() == "scissor"  && computerSelection == "Rock"){
        return "Computer wins"}
    }
}
game()
    
 