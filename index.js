var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var images=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
function randomImg(){
    document.querySelector(".img1").setAttribute("src",images[randomNumber1-1]);
    document.querySelector(".img2").setAttribute("src",images[randomNumber2-1]);
}
randomImg();
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}else{
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}