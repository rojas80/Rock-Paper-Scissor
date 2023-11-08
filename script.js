let computerScore = 0;
let playerScore = 0;
const playerDisplayScore = document.getElementById("p-score");
const computerDisplayScore =  document.getElementById("c-score");



document.getElementById("rock").addEventListener('click',function(){ 
    results("rock")
});
document.getElementById("paper").addEventListener('click', function(){
    results("paper")
});
document.getElementById("scissor").addEventListener('click', function(){
    results("scissor")
});

function results(player_selection){
    //console.log(player_selection); 
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection(player_selection);
    console.log("✂️ Scissor");

    playGame(computerChoice,playerChoice);


}

function displayPlayersChoice(computerChoice, playerChoice){
    const rock = "🪨 Rock";
    const paper = "📃 Paper";
    const scissor = "✂️ Scissor";

    const playerDisplay = document.getElementById("player-choice");
    const computerDisplay =  document.getElementById("computer-choice");
    // 1 = rock, 2 = paper, 3 = scissors
    switch(playerChoice){
        case 1:
            playerDisplay.textContent = rock;
            break;
        case 2:
            playerDisplay.textContent = paper;
            break;
        case 3:
            playerDisplay.textContent = scissor;
            break;

    }
    switch(computerChoice){
        case 1:
            computerDisplay.textContent = rock;
            break;
        case 2:
            computerDisplay.textContent  = paper;
            break;
        case 3:
            computerDisplay.textContent = scissor
            break;
    }

}

// 1 = rock, 2 = paper, 3 = scissors

function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 1;
}
function playerSelection(choice){
    switch(choice){
        case "rock":
            return 1;
            break;
        case "paper":
            return 2;
            break;
        case "scissor":
            return 3;
    }
    return null;
}
function updateWinner(winner){
    let winnerText = document.getElementById("winner");
    winnerText.textContent = winner;

    setTimeout(function(){
        let text =  document.getElementById("winner");
        text.textContent  = "";
    },2000);
}
// rock > scissors, paper > rock ,  scissors >  paper
function playGame(computer, player ){
    
    displayPlayersChoice(computer,  player);
    console.log(computerScore);

    // if  player win
    //rock(p)  vs scissors(c) -> player wind
    if (player === 1 && computer === 3){
        playerScore++;
        updateWinner("Player Wins");
        console.log("player Wins");
    }//rock(p)  vs  paper(c) -> computer  wins
    else if(player === 1 && computer === 2){
        computerScore++;
        updateWinner("Computer Wins");
        console.log("computer Wins");
    }//rock(p) vs rock(c) -> tie game
    else if(player === 1 && computer === 1 ){
        updateWinner("Tie game");
        console.log("tie game")
    }//player = paper
    else if (player === 2 && computer === 3){
        computerScore++;
        updateWinner("Computer Wins");
        console.log("computer Wins");
    }//  
    else if(player === 2 && computer === 2){
        updateWinner("Tie game");
        console.log("tie Wins");
    }//
    else if(player === 2 && computer === 1 ){
        console.log("player Wins")
        playerScore++;
        updateWinner("Player Wins")
       
    }//scissors
    else if (player === 3 && computer === 3){
        updateWinner("Tie game");
        console.log("tie game");
    }//  
    else if(player === 3 && computer === 2){
        updateWinner("Player Wins")
        playerScore++;
        console.log("player Wins");
        
    }//
    else if(player === 3 && computer === 1 ){
        computerScore++;
        updateWinner("Computer Wins");
        console.log("computer Wins")
    }
    playerDisplayScore.textContent = playerScore;
    computerDisplayScore.textContent = computerScore;

}
