let playerWins=0;
let computerWins=0;
let draw=0;
 const computerPlay= () =>{
let number =Math.floor( (Math.random()*3)+1);
let choice=""
switch(number){
    case 1:
    choice="rock"
    break;
    case 2:
    choice="paper"
    break;
    case 3:
   choice ="scissors"
     break;
}
return choice;
}
const playGame= (playerSelection, computerSelection) =>{
playerSelection=playerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        console.log( "You both chose:"+ playerSelection +" It's the same so it's a draw!!");
        return draw++;
    }else if(playerSelection==="rock" && computerSelection==="scissors"){
        console.log("You chose:" +playerSelection  +" The computer chose:"+computerSelection +" You WIN!!");
        return playerWins++
    }else if(playerSelection==="paper"&& computerSelection=="rock"){
        console.log("You chose:" +playerSelection  +" The computer chose:"+computerSelection +" You WIN!!");
        return playerWins++;
    }else if(playerSelection==="scissors"&& computerSelection=="paper"){
        console.log("You chose:" +playerSelection  +" The computer chose:"+computerSelection +" You WIN!!");
       return playerWins++;
    }else{
        console.log("You chose:" +playerSelection  +" The computer chose:"+computerSelection +" You lose!!");
        return computerWins++;
    }
}
const game=()=>{
 playerwins=0;
 computerwins=0;
 draw=0;
let x=0;
while(x<5){
    playerSelection=prompt("Rock paper or scissors");
    let computerSelection=computerPlay();
    playGame(playerSelection, computerSelection);
    x++;
}
console.log("Player wins:" +playerWins+ " Computer wins:"+computerWins+" Draws: " +draw)
    if(computerWins===playerWins){
  console.log( "It's a draw!");
    }else if(computerWins>playerWins){
    console.log("Computer won the match!");
    }else {
    console.log( "Player won the match");
    }
}

const buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    switch(true){
        case id='paper':
            break;
        case id='rock':
            break;
        case id='scissors':
            break;    

    }
    button.addEventListener('click',(e)=>{
        alert(button.id);
    });
});
//game();
// console.log(playGame(playerSelection, computerSelection));