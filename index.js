var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var diceImage = "dice" + randomnumber1 + ".png"

var imagesource = "images/"+ diceImage ;

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var imagesource2 = "images/dice"+ randomnumber2 + ".png" ;

img1.setAttribute("src", imagesource);
img2.setAttribute("src", imagesource2);

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomnumber1 < randomnumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
