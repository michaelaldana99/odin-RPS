let result;
let i;
let h;
let validChoices = ["rock", "paper", "scissors"];
let j;
let w = 0;
let l = 0;
// get a random string from array

function getRandom(stringArray) {
    const randomIndex = Math.floor(Math.random() * stringArray.length);
    return stringArray[randomIndex];
}

// round function
function round(){
    ask();
    getComputerChoice();
    calc();
}
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
        l++
    }
    else {
        console.log("WON Player:" + i + " JARVIS:" + h)
        w++
    }
}

// ask user for correct play

function ask(){
    do {
        i = prompt("Welcome to Rock, Paper, and Scissors. Please enter your play (rock, paper, or scissors): ");
        result = i.toLowerCase();
    } while (!validChoices.includes(result));
}

for(j = 0; j < 5; j++)
{
    console.log("round " + (j + 1));
    round();
}
if (l > w){
    console.log("You Lost the game");
}
else if (w > l){
    console.log("You Won the game")
}
else {
    console.log("TIE")
}




