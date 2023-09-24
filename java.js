let result;
let i;
let h;
let validChoices = ["rock", "paper", "scissors"];

// get a random string from array

function getRandom(stringArray) {
    const randomIndex = Math.floor(Math.random() * stringArray.length);
    return stringArray[randomIndex];
}

// 

function getComputerChoice() {
    h = getRandom(validChoices);
}

// calculate results

function calc(){
    if(i === h)
    {
        console.log("TIE Player:" + i + " JARVIS:" + h)
    }
    else if (i === "rock" && h === "paper" || i === "paper" && h === "scissors" || i === "scissors" && h === "rock"){
        console.log("LOST Player:" + i + " JARVIS:" + h)
    }
    else {
        console.log("WON Player:" + i + " JARVIS:" + h)
    }
}

// ask user for correct play

do {
    i = prompt("Welcome to Rock, Paper, and Scissors. Please enter your play (rock, paper, or scissors): ");
    result = i.toLowerCase();
} while (!validChoices.includes(result));

getComputerChoice();
calc();



