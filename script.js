const computerPlay = function() {
    let choice  = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors'
    }
    }
    
  //Testing 'getComputerChoice
  //console.log(computerPlay()); 
  
  const playRound = (playerSelection, computerSelection) =>{
    if (playerSelection === computerSelection) {
      //console.log('The game is tied!')
  return 'tied';
    }
   if (playerSelection === 'rock'){
     if (computerSelection === 'paper'){
       // console.log ("The machine won!")
        return 'CPU won';
      } else {
       // console.log ('You won!')
        return 'user won';
      }
    }
  if (playerSelection === 'paper'){
     if (computerSelection === 'scissors'){
    //  console.log ("The machine won!")
      return 'CPU won';
    } else {
     // console.log ('You won!')
      return 'user won';
      }
    }
  if (playerSelection === 'scissors'){
    if (computerSelection === 'rock'){
     // console.log ("The machine won!")
      return 'CPU won';
    } else {
     // console.log ('You won!')
      return 'user won';
      }
    }
 
  }

  let playerScore = 0;
  let computerScore = 0;
  

// first out of 5 
/*
  const score = function(winner) {
    if (winner === "CPU won") {
        computerScore++;
        rounds++;
        return console.log('Round: ' + rounds + '. The score is User: ' + playerScore + ' vs. CPU: ' + computerScore);
    } else if (winner === "user won") {
        playerScore++;
        rounds++;
        return console.log('Round: ' + rounds + '. The score is User: ' + playerScore + ' vs. CPU: ' + computerScore);
    } else {
        return console.log('Round: ' + rounds + '. The score is User: ' + playerScore + ' vs. CPU: ' + computerScore);
    }

    } */

    const score = function(winner) {
      if (winner === "CPU won") {
          computerScore++;
          return console.log('The score is User: ' + playerScore + ' vs. CPU: ' + computerScore);
      } else if (winner === "user won") {
          playerScore++;
          return console.log('The score is User: ' + playerScore + ' vs. CPU: ' + computerScore);
      } else {
          return console.log('The score is User: ' + playerScore + ' vs. CPU: ' + computerScore);
      }
  
      }


    const newGame = function(){
      if (playerScore === 5 || computerScore === 5) {
        let newGameResponse = prompt("Would you like to play a new game?").toLowerCase();
        while (newGameResponse != 'yes'  && newGameResponse != 'no') {
          newGameResponse = prompt("Please enter 'Yes' or 'No'").toLowerCase();
        }
          if (newGameResponse == 'yes'){
              playerScore = 0;
              computerScore = 0;
              console.log('New Game!')
              console.log(playGame());
          } else if (newGameResponse == 'no'){
            console.clear();
            playerScore = 0;
            computerScore = 0;
            console.log('Game Over!');
            alert("Game Over!");
        } else {
            console.log('error');
          }
         }
     }

    const playGame = function() {

    let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
      while (playerSelection != 'rock'  && playerSelection != 'scissors' && playerSelection != 'paper'){
          playerSelection = prompt("Please try again! Enter 'Rock', 'Paper' or 'Scissors'")
      }
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(score(playRound(playerSelection,  computerSelection)));
 
    if (playerScore === 5  || computerScore === 5) {
        if (playerScore > computerScore){
          return "You win! " + playerScore + " to " + computerScore;
          //alert("You win! " + playerScore + " to " + computerScore)
      }
      else if (playerScore === computerScore)
      {
          return "You are tied!";
          //alert("You are tied!");

      }
      else{
          return "You Lose! " + computerScore + " to " + playerScore;
          //alert("You Lose! " + computerScore + " to " + playerScore);

      }

    } 

    console.log(playGame());
    console.log(newGame());

    } 
      

console.log(playGame())
