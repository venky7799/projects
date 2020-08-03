var randomnumbber1 = Math.floor(Math.random()*6);
var x= document.getElementsByClassName('img1').item(0);
var v= x.getAttribute('src');
if(randomnumbber1==1)
    v="./images/dice1.png";
else if (randomnumbber1 ==2)
    v="./images/dice2.png";
else if (randomnumbber1 ==3)
    v="./images/dice3.png";
    else if (randomnumbber1 ==4)
    v="./images/dice4.png";
    else if (randomnumbber1 ==5)
    v="./images/dice5.png";
else 
v = "./images/dice6.png";
x.setAttribute("src",v);



var randomnumber2 = Math.floor(Math.random()*6);
var y = document.getElementsByClassName('img2').item(0);
var m = y.getAttribute('src');
if(randomnumber2==1)
    m="./images/dice1.png";
else if(randomnumber2==2)
    m="./images/dice2.png";
    else if(randomnumber2==3)
    m="./images/dice3.png";
    else if(randomnumber2==4)
    m="./images/dice4.png";
    else if(randomnumber2==5)
    m="./images/dice5.png";
else 
    m="./images/dice6.png";
    y.setAttribute("src",m);



if(randomnumbber1 > randomnumber2){
    document.querySelector('h1').innerText ="player 1 won";
}
else if(randomnumbber1 < randomnumber2)
    document.querySelector('h1').innerText="player2 won";
else 
    document.querySelector('h1').innerText="draw";

console.log(randomnumbber1);
console.log(randomnumber2);
