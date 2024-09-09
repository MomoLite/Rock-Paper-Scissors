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

function playRound(event) {
    let humanChoice = event.target.innerText.toLowerCase();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        document.querySelector(".prompt").innerHTML = ("Draw! Both chose " + humanChoice + "." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        document.querySelector(".prompt").innerHTML = ("You won! Rock beats Scissors." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        document.querySelector(".prompt").innerHTML = ("You lose! Paper beats Rock." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        document.querySelector(".prompt").innerHTML = ("You won! Paper beats Rock." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        document.querySelector(".prompt").innerHTML = ("You lose! Scissors beat Paper." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        document.querySelector(".prompt").innerHTML = ("You won! Scissors beat Paper." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
    }
    else {
        computerScore += 1;
        document.querySelector(".prompt").innerHTML = ("You lose! Rock beats Scissors." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
    }

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            document.querySelector(".prompt").innerHTML = ("Congrats! You beat the computer." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
        }
        else {
            document.querySelector(".prompt").innerHTML = ("Sorry, you lost to the computer." + `<br>Human Score: ${humanScore} vs Computer Score: ${computerScore}`);
        }

        humanScore = 0;
        computerScore = 0;
    }
}

document.querySelector(".container").addEventListener("click", playRound);