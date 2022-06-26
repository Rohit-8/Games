var dice1=Math.floor(6*(Math.random()))+1;
var dice2=Math.floor(6*(Math.random()))+1;

if(dice1>dice2){
    document.querySelector("h1").innerHTML="🥇Player 1 Wins!";
}
else if(dice1<dice2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🥇";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
var diceImage1="dice"+dice1+".png";
var diceImage2="dice"+dice2+".png";

var imageSource1="images/"+diceImage1;
var imageSource2="images/"+diceImage2;

document.querySelectorAll("img")[0].setAttribute("src",imageSource1);
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);