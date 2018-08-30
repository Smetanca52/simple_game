let playerPoints = 0;
let compPoints = 0;


function computerPlay(){
  choices = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function playOne(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    return "Tie!";

  }else if (playerSelection == "Rock") {
    if(computerSelection=="Scissors"){
      return "Point!";
    }
    if(computerSelection=="Paper"){
      return "Loss!";
    }

  }else if (playerSelection == "Paper"){
    if(computerSelection=="Scissors"){
      return "Loss!";
    }
    if(computerSelection=="Rock"){
      return "Point!";
    }

  }else if (playerSelection == "Scissors"){
    if(computerSelection=="Rock"){
      return "Loss!";
    }
    if(computerSelection=="Paper"){
      return "Point!";
    }
  }
}

function startRound(clicked_id){
  let resultMessage = "";
  if(playerPoints < 5 && compPoints < 5){
    let playerSelection = clicked_id;
    let computerSelection = computerPlay();
    let value = playOne(playerSelection, computerSelection);
    resultMessage += value + " ";
    if(value === "Loss!"){
      compPoints++;
      resultMessage += ("Computer selected: " + computerSelection + ". You selected: " + playerSelection + "!");
    }else if (value === "Point!") {
      playerPoints++;
      resultMessage += ("Computer selected: " + computerSelection + ". You selected: " + playerSelection + "!");
    }else if (value === "Tie!"){
      resultMessage += "Both selected " + playerSelection;
    }
    console.log("Player points: " + playerPoints + " Computer Points: " + compPoints);
  }

  if(playerPoints == 5){
    resultMessage = "You win! Congratulations!";
  }else if(compPoints == 5){
    resultMessage = "You lose! Sorry :(";
  }
  document.getElementById("result").innerHTML = compPoints;
  document.getElementById("result2").innerHTML = playerPoints;
  document.getElementById("result3").innerHTML = resultMessage;
}

function reset(){
  playerPoints = 0;
  compPoints = 0;
  document.getElementById("result").innerHTML = compPoints;
  document.getElementById("result2").innerHTML = playerPoints;
  document.getElementById("result3").innerHTML = "";
}
