//alert("Working!!");
randomNumber1=Math.floor(Math.random()*6+1);
//console.log(randomNumber1);
var diceimage="dice"+randomNumber1+".png";
var sour="images/"+diceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",sour);
randomNumber2=Math.floor(Math.random()*6+1);
var diceimage2="dice"+randomNumber2+".png";
var sour2="images/"+diceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",sour2);
if(randomNumber1>randomNumber2)
{
   document.querySelector("h1").innerHTML="Player 1 Win🚩";
}
else if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerHTML="Tie!!";
   
}
else
{
    document.querySelector("h1").innerHTML="Player 2 Win🚩";
}
