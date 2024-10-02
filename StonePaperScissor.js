//variables to updated scores.
let userScore = 0;
let compScore = 0;

//to reflect choices.
const userChoices = document.querySelectorAll(".choice");
const compChoices = document.querySelectorAll(".comp_choice");

//to reflect updated scores.
const userPara = document.querySelector("#user_score");
const compPara = document.querySelector("#comp_score");

//to update the message box.
const messageBox = document.querySelector("#msg");

//to generate random computer choices.
const generateComputerChoice = () => 
{
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//In case the game draws, what will be done?
const drawGame = () => 
{
    messageBox.innerText = "It's a draw!";
    //console.log("Draw game");
}

//else, how to show the winner?
const showWinner = (userWin) => 
{
    if (userWin) 
    {
        userScore++; //update user score
        userPara.innerText = userScore; //reflect score
        messageBox.innerText = "User Wins!"; //reflect msg
        //console.log("User wins");
    }
    else 
    {
        compScore++; //update computer score
        compPara.innerText = compScore; //reflect score
        messageBox.innerText = "Computer Wins!"; //reflect msg
        //console.log("Computer wins");
    }
}

//since computer side's panel is not clickable, how its choices will be reflected?
const highlightComputerChoice = (compChoice) => 
{
    compChoices.forEach((compChoiceElement) => 
    {
        const compElementId = compChoiceElement.getAttribute("id");
        if ((compChoice === "rock" && compElementId === "comp_rock") || (compChoice === "paper" && compElementId === "comp_paper") || (compChoice === "scissor" && compElementId === "comp_scissor"))
            compChoiceElement.classList.add("highlight");
        else
            compChoiceElement.classList.remove("highlight");
    });
}


const playGame = (userChoice) => 
{
    //console.log("User choice: ", userChoice);
    const compChoice = generateComputerChoice(); //has computer's choice
    //console.log("Computer choice: ", compChoice);

    highlightComputerChoice(compChoice); //reflects computer's choice

    if (userChoice === compChoice) drawGame();
    else 
    {
        let userWin = true;
        if (userChoice === "rock")
            userWin = compChoice === "paper" ? false : true;
        else if (userChoice === "paper")
            userWin = compChoice === "scissor" ? false : true;
        else
            userWin = compChoice === "rock" ? false : true;
        showWinner(userWin);
    }
}

userChoices.forEach((choice) => 
{
    choice.addEventListener("click", () => 
    {
        let userChoice = choice.getAttribute("id");
        if (userChoice === "user_rock") userChoice = "rock";
        else if (userChoice === "user_paper") userChoice = "paper";
        else userChoice = "scissor";
        console.log("Choice clicked:", userChoice);
        playGame(userChoice);
    });
});
