let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userPara = document.querySelector("#user_score");
const compPara = document.querySelector("#comp_score");

const generateComputerChoice = () => {
    let options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => { console.log("Draw game");}

const showWinner = (userWin) => {
    if(userWin)
    {
        userScore++;
        userPara.innerText = userScore;
        console.log("user wins");
    }
    else
    {
        compScore++;
        compPara.innerText = compScore;
        console.log("computer wins");
    }
}

const playGame = (userChoice) => {
    console.log("user choice: ",userChoice);
    const compChoice = generateComputerChoice();
    console.log("computer choice: ",compChoice);


    if(userChoice == compChoice) 
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice=="rock")
        {
            userWin = compChoice=="paper" ? false : true;
        }
        else if (userChoice=="paper")
        {
            userWin = compChoice=="scissor" ? false : true;
        }
        else
        {
            userWin = compChoice=="rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => 
    {
        console.log(choice);
        choice.addEventListener("click", () => {
            let userChoice = choice.getAttribute("id");
            if(userChoice=="user_rock") userChoice = "rock";
            else if(userChoice=="user_paper") userChoice = "paper";
            else userChoice = "scissor";
            console.log("choice was clicked.",userChoice);
            playGame(userChoice);
        });
    });
