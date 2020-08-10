for(var i=0; i<document.querySelectorAll(".drum").length;i++)

{
//dectects mouse click//
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      console.log(this);
      console.log(this.innerHTML);
      var buttonInnerhtml = this.innerHTML;
      keyplay(buttonInnerhtml);
      buttonAnimation(buttonInnerhtml);
      
    });



}

//detects keyboard press

document.addEventListener("keydown",function(e){
  keyplay(e.key);
  buttonAnimation(e.key);
})



function keyplay(keyy){
  
  console.log(keyy);
  switch (keyy) {


    case 'w':
      var audio1 = new Audio('sounds/crash.mp3');
      audio1.play();
     
      break;

      case 'a':
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;

        case 's':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;

        case 'd':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

        case 'j':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

        case 'k':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
        case 'l':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
  
  }
}

function buttonAnimation(currentkey){
 var doc=  document.querySelector("."+currentkey);
 doc.classList.add("pressed");
 setTimeout(function(){
   doc.classList.remove("pressed");

 },100); 
}




/*
var audio = new Audio('sounds/tom-1.mp3');
audio.play();*/