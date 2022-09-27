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
    
}

game();