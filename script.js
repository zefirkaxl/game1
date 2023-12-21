
const btn = document.querySelector("button");
const trasa = document.querySelector(".trasa"),
  pig = document.querySelector(".pig");
let record = document.querySelector(".record");

function jamp() {
  setTimeout(myFunction, 1300);
  pig.classList.add("jjj");
  function myFunction() {
    pig.classList.remove("jjj");
  }
}

let rec = 0;
function updateRecord() {
  record.innerHTML = rec
  rec += 10;
}

const intervalId = setInterval(updateRecord, 1000);

btn.addEventListener("click", jamp, );

const pula = document.querySelector(".pula");
const btn2 = document.querySelector('.button2');
function atack() {
  setTimeout(myFunctio, 700);
  pula.classList.add("pul");
  function myFunctio() {
    pula.classList.remove("pul");
  }
}
const per = document.querySelector('.per')
btn2.addEventListener('click', atack)
const pigg = pig.getBoundingClientRect();
const perr = per.getBoundingClientRect();
let end = setInterval (function(){
   let pigTop = parseInt(window.getComputedStyle(pig).getPropertyValue('top'))
   let perLeft = parseInt(window.getComputedStyle(per).getPropertyValue("right"));
   if(perLeft > 330 && pigTop < -69 && pigTop > -91){
    alert('game-over')
   }else{
    
   }
},10)
  
  