let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const generateComputerChoice = () => {
    let options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => { console.log("Draw game");}

const playGame = (userChoice) => {
    console.log("user choice: ",userChoice);
    const compChoice = generateComputerChoice();
    console.log("computer choice: ",compChoice);


    if(userChoice == compChoice) 
    {
        drawGame();
    }
}

choices.forEach((choice) => 
    {
        console.log(choice);
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            console.log("choice was clicked.",userChoice);
            playGame(userChoice);
        });
    });
