// Random number between 0, 1 and 2
function getComputerChoice(number = Math.floor(Math.random() * 3)) {
    switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const huChoice = humanChoice.replace(humanChoice.charAt(0), humanChoice.charAt(0).toUpperCase());
    const compChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (humanChoice == computerChoice) {
        return "You drew! " + huChoice + " ties with " + compChoice + ".";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        return "You win! " + huChoice + " beats " + compChoice + ".";
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        return "You lose! " + compChoice + " beats " + huChoice + ".";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        return "You win! " + huChoice + " beats " + compChoice + ".";
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        return "You lose! " + compChoice + " beats " + huChoice + ".";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "You win! " + huChoice + " beats " + compChoice + ".";
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        return "You lose! " + compChoice + " beats " + huChoice + ".";
    }
}

let humanScore = 0;
let computerScore = 0;

// Add event listener to the button
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");

buttons.forEach(function (button) {
    button.style.padding = "10px 20px";
    button.style.margin = "5px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";

    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#45a049";
    });

    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#4CAF50";
    });
    button.addEventListener("click", function () {

        const pOut = document.createElement("p");
        pOut.classList.add("pOutClass");

        if (humanScore < 5 && computerScore < 5) {
            const humanSelection = this.id
            const computerSelection = getComputerChoice();

            const outPut = playRound(humanSelection, computerSelection);

            if (outPut.includes("win")) {
                humanScore += 1;
            } else if (outPut.includes("lose")) {
                computerScore += 1;
            }

            pOut.textContent = outPut + "\n" + "Human Score: " + humanScore + " Computer Score: " + computerScore;
            container.appendChild(pOut);
        }

        const h1Win = document.createElement("h1");
        h1Win.classList.add("h1WinClass");

        const h1Lose = document.createElement("h1");
        h1Lose.classList.add("h1LoseClass");

        const h1Draw = document.createElement("h1");
        h1Draw.classList.add("h1DrawClass");


        if (humanScore == 5 || computerScore == 5) {
            if (humanScore > computerScore) {
                h1Win.textContent = "You win the game!";
                container.appendChild(h1Win);
            }

            else if (humanScore < computerScore) {
                h1Lose.textContent = "You lose the game!";
                container.appendChild(h1Lose);
            }

            else {
                h1Draw.textContent = "You drew!";
                container.appendChild(h1Draw);
            }
        }
    });
});