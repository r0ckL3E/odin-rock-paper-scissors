
// Random number between 0, 1 and 2
function getComputerChoice(number = Math.floor(Math.floor(Math.random() * 3))) {
    switch (number) {
        case 0:
            return ("rock");

        case 1:
            return ("paper");

        case 2:
            return ("scissors");

    }
}

function getHumanChoice() {
    response = window.prompt("Enter a choice: ");
    return response.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    
    function playRound(humanChoice, computerChoice) {
        huChoice = humanChoice.replace(humanChoice.charAt(0), humanChoice.charAt(0).toUpperCase());
        compChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        if (humanChoice == computerChoice) {
            return "You drew! " + huChoice + " ties with " + compChoice + ".";
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            return "You win! " + huChoice + " beats " + compChoice + ".";
        }
        else if (computerChoice == "rock" && humanChoice == "scissors") {
            return "You lose! " + compChoice + " beats " + huChoice + ".";
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            return "You win! " + huChoice + " beats " + compChoice + ".";
        }
        else if (computerChoice == "scissors" && humanChoice == "paper") {
            return "You lose! " + compChoice + " beats " + huChoice + ".";
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            return "You win! " + huChoice + " beats " + compChoice + ".";
        }
        else if (computerChoice == "paper" && humanChoice == "rock") {
            return "You lose! " + compChoice + " beats " + huChoice + ".";
        }
    }
    
    // Calling the getHumanChoice and getHumanChoice functions.
    // Outputting the result for one game of rock, paper and scissors
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const outPut = playRound(humanSelection, computerSelection);

    if (outPut.includes("win")) {
        humanScore += 1
    }
    else if (outPut.includes("lose")) {
        computerScore +=1;
    }

    console.log(playRound(humanSelection,computerSelection)+ "\n" + humanScore + " " + computerScore);
}

// Play 5 rounds by calling playRound 5 times
playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore) {
    console.log("You win the game!");
}
else if (humanScore == computerScore) {
    console.log("You drew!");
}
else {
    console.log("You lose the game!");
}