const state ={
  view:{
    quadrados: document.querySelectorAll(".quadrado"),
    inimigo: document.querySelector(".ralph-brabo"),
    time : document.querySelector("#time"), 
    score : document.querySelector("#score"),
    
  },
  values:{
    
    timerId:null,
    countDownTumerID: setInterval(countDown,1000),
    gameVelocity:1000,
    hitPosition : 0,
    result:0,
    currentTime: 60,
  },
 
}
function countDown(){
  state.values.currentTime--;
  state.view.time.textContent = state.values.currentTime;
  if(state.values.currentTime <= -1){
    clearInterval(state.values.countDownTumerID);
    clearInterval(state.values.timerId);
    alert("Game Over! O seu record: "+ state.values.result);
  }
}
function randomSquare(){
  state.view.quadrados.forEach((quadrado)=>{
    quadrado.classList.remove("ralph-brabo");
  });
  let randomNumber = Math.floor(Math.random()* 9);
  let randomSquare = state.view.quadrados[randomNumber];
  randomSquare.classList.add("ralph-brabo");
  state.values.hitPosition = randomSquare.id;
}
 
 function moveInimigo(){
   state.values.timerId = setInterval(randomSquare,state.values.gameVelocity);
 }
 
function addListenerHitBox(){
  
  state.view.quadrados.forEach((quadrado)=>{
   quadrado.addEventListener("mousedown",()=>{
     if(quadrado.id === state.values.hitPosition){
       
       state.values.result++;
       state.view.score.textContent = state.values.result;
       state.values.hitPosition = null;
      playSom();
       
     }
   }); 
  });
}

function playSom(){
  
let audio = new Audio("/DetonaRalPH/JogosJavascript/componentesSom/game-start-6104.mp3");

audio.volume = 0.6;
audio.play();
  
}
function som2(){
let musica = new Musica("/DetonaRalPH/JogosJavascript/componentesSom/game-music-loop-7-145285.mp3");
  musica.volume = 0.5;
  musica.play();
}
function inicio(){
  
  moveInimigo();
  addListenerHitBox();
  playSom()
  
}
inicio()
musica()