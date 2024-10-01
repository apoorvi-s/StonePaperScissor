let userScore = 0;
let compScore = 0;

const userChoices = document.querySelectorAll(".choice");
const compChoices = document.querySelectorAll(".comp_choice");

const userPara = document.querySelector("#user_score");
const compPara = document.querySelector("#comp_score");

const messageBox = document.querySelector("#msg");


const generateComputerChoice = () => 
{
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () => 
{
    messageBox.innerText = "It's a draw!";
    console.log("Draw game");
}


const showWinner = (userWin) => 
{
    if (userWin) 
    {
        userScore++;
        userPara.innerText = userScore;
        messageBox.innerText = "User Wins!";
        console.log("User wins");
    }
    else 
    {
        compScore++;
        compPara.innerText = compScore;
        messageBox.innerText = "Computer Wins!";
        console.log("Computer wins");
    }
}

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
    console.log("User choice: ", userChoice);
    const compChoice = generateComputerChoice();
    console.log("Computer choice: ", compChoice);

    highlightComputerChoice(compChoice);

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
