
// sellecting all the needed html elements for manipulation
let allMoves = document.querySelectorAll(".choice");
let yourScore = document.querySelector("#yorScore");
let computerScore = document.querySelector("#compScore");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newGame");


// created variables for tracking the current score of players
let currentYourScore = 0;
let curreCompScore = 0;


//  for starting new game
newGameBtn.addEventListener("click",()=>{
    currentYourScore = 0;
    curreCompScore = 0;
    msg.innerText="Pick Your Move";
    yourScore.innerText=`${currentYourScore}`;
    computerScore.innerText=`${curreCompScore}`;
})


// to check which move is selected by user
allMoves.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        msg.innerText="Pick Your Move";
        playGame(userChoice);
        
    })
})


// if game drow so do this 
function drowGame(compChoice,userChoice){
   msg.innerText = `Your Move = "${userChoice}" AND Computer's Move = "${compChoice}" \n Match DROW please Choice Move Again`
}


// if user won the game so do this
function winGame(compChoice,userChoice){
    msg.innerText = `Your Move = "${userChoice}" AND Computer's Move = "${compChoice}" \n You WON Choice Move Again`
    currentYourScore++;
    yourScore.innerText=`${currentYourScore}`;
}


// if user loses the game so do this
function lossGame(compChoice,userChoice){
    msg.innerText = `your Move = ${userChoice}  \n Computer's Move = ${compChoice} \n you LOSS choice Move again`
    curreCompScore++;
    computerScore.innerText=`${curreCompScore}`;
}



// to check which move is selected by the user
function gitComputerChoice(){
    let array = ["paper","stone","scissor"];
    let index = Math.floor(Math.random()*3);
    return array[index];
}


// checking who won or loss the game 
function playGame(userChoice){
   let  compChoice  = gitComputerChoice();
   
   if(compChoice === userChoice){
    drowGame(compChoice,userChoice);
   }

   else if(compChoice ==="paper"  && userChoice==="stone" || compChoice ==="scissor"  && userChoice==="paper" || compChoice ==="stone"  && userChoice==="scissor"){
    lossGame(compChoice,userChoice);
   }
   else{
    winGame(compChoice,userChoice);
   }
}


