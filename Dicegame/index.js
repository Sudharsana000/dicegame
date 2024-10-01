var p1, p2;
p1 = Math.floor(Math.random()*6+1);
p2 = Math.floor(Math.random()*6+1);

var imgOne = "images/dice"+p1+".png";
var imgTwo = "images/dice"+p2+".png";

document.querySelector(".one img").src = imgOne;
document.querySelector(".two img").src = imgTwo;

if(p1 === p2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(p1 > p2){
    document.querySelector("h1").innerHTML=" 🚩 Player 1 wins! ";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!  🚩";
}