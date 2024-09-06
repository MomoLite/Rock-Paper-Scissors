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


