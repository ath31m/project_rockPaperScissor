const choices = ["rock","paper","scissors"];

function game() {
    //play the game //last five rounds  //console based
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    //get input from the player
    let input = prompt("plz, type in Rock, Paper or Scissors");
    input = input.toLowerCase();

    console.log(input);
}

function computerChoice() {
    //get random input from the computer
    return choices[Math.floor(Math.random()*choices.length)];
}

game();