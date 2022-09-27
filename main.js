const choices = ["rock","paper","scissors"];
const winnerList = [];

function game() {
    //play the game //last five rounds  //console based
    for (let i = 1; i <= 5; i++ ){
        playRound(i);
    }
    document.querySelector("button").textContent = "Play Again";
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection)
    winnerList.push(winner);
    logRounds(playerSelection,computerSelection,winner,round);
}

function playerChoice() {
    //get input from the player
    let input = prompt("plz, type in Rock, Paper or Scissors");

    while (input == null){
        input = prompt("plz, type in Rock, Paper or Scissors"); 
    }

    input = input.toLowerCase();
    let check = validateInput(input);

    while (check == false){
        input = prompt("plz, type in Rock, Paper or Scissors but the capitalization doesn't matter.");

        while (input == null){
            input = prompt("plz, type in Rock, Paper or Scissors"); 
        }
        
        input = input.toLowerCase();
        check = validateInput(input);
    } 
    return input;  
}

function computerChoice() {
    //get random input from the computer
    return choices[Math.floor(Math.random()*choices.length)];
}

/*function validateInput(choice){
    if (choices.includes(choice)){
        return true;
    } 
    return false;
}*/
function validateInput(choice){
    return choices.includes(choice)
}

function checkWinner(choiceP,choiceC){
    if(choiceP === choiceC){
        return "Tie";
    } else if(
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
    ){
        return "Player";
    }
    else {
        return "Computer"
    }
}

function logWins(){
    let playerWins = winnerList.filter(item => item == "Player").length;
    let computerWins = winnerList.filter(item => item == "Computer").length;
    let ties = winnerList.filter(item => item == "Tie").length;
    console.log("Results are : ");
    console.log("Player Wins :  " + playerWins);
    console.log("Computer Wins :  " + computerWins); 
    console.log("Ties :  " + ties);
}

function logRounds(playerChoice,computerChoice,winner,round){
    console.log("Round : "+ round);
    console.log("Player chose : ", playerChoice);
    console.log("Computer chose : ", computerChoice);
    console.log("The winner is : ", winner);
    console.log("---------------------------------------------------------------------");
}