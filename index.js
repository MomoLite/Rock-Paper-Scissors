var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}


function getHumanChoice() {
    return prompt("What's your move? ");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase().trim();

    if (humanChoice === computerChoice) {
        console.log("Draw! Both chose " + humanChoice + ".")
    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won! Rock beats Scissors.");
        humanScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You won! Paper beats Rock.");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won! Scissors beat Paper");
        humanScore += 1;
    }
    else {
        console.log("You lose! Rock beats Scissors.");
        computerScore += 1;
    }
    console.log();
}



