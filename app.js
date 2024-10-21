let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score")
const computerScorepara = document.querySelector("#computer-score")

const genComputerChoice = ()=>{
    const option = ["rock", "paper","Scissors"]
    const rendomIdx= Math.floor(Math.random()* 3); 
    return option[rendomIdx];
}

const drawGame = ()=>{
    // console.log("game was draw")
    msg.innerText = "Match Draw try again"
    msg.style.backgroundColor= "#081b31";
}

const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText= userScore
        // console.log("You Win")
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor= "green";
    }else{
        computerScore++;
        computerScorepara.innerText= computerScore;
        // console.log("You Lose")
        msg.innerText = `You Lose. ${computerChoice} beats Your ${userChoice}`
        msg.style.backgroundColor= "red";
    }
}
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice)
    const computerChoice = genComputerChoice();
    console.log("computer choice=", computerChoice);

    if(userChoice === computerChoice){
         drawGame();
    }else{
        let userWin= true;
        if(userChoice === "rock"){
           userWin = computerChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
           userWin = computerChoice === "scissers" ? false : true
        }else {
           userWin = computerChoice === "rock" ? false : true
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})