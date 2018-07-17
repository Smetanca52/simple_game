function rock() {
  let weapons = ['ROCK', 'PAPER', 'SCISSORS'];
  let weapon = weapons[Math.floor(Math.random()*weapons.length)];
  if (weapon == 'ROCK') {
    document.getElementById("result2").innerHTML = 'Tie!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
  else if (weapon == 'PAPER') {
    document.getElementById("result2").innerHTML = 'You lost!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
  else {
    document.getElementById("result2").innerHTML = 'You won!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
}

function paper() {
  let weapons = ['ROCK', 'PAPER', 'SCISSORS'];
  let weapon = weapons[Math.floor(Math.random()*weapons.length)];
  if (weapon == 'ROCK') {
    document.getElementById("result2").innerHTML = 'You won!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
  else if (weapon == 'PAPER') {
    document.getElementById("result2").innerHTML = 'Tie!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
  else {
    document.getElementById("result2").innerHTML = 'You lost!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
}
function scissors() {
  let weapons = ['ROCK', 'PAPER', 'SCISSORS'];
  let weapon = weapons[Math.floor(Math.random()*weapons.length)];
  if (weapon == 'ROCK') {
    document.getElementById("result2").innerHTML = 'You lost!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
  else if (weapon == 'PAPER') {
    document.getElementById("result2").innerHTML = 'You won!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
  else {
    document.getElementById("result2").innerHTML = 'Tie!';
    document.getElementById("result").innerHTML = 'Computer chose: ' + weapon;
  }
}
