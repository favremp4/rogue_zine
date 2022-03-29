import { DragElement } from "../components/DragElement"


import "../css/reset.css";
import "../css/style.css";
import "../css/accueil.css";



const abces = document.querySelector('.t1');

const aun = document.querySelector('.a1');
const adeux = document.querySelector('.a2');
const atrois = document.querySelector('.a3');
const bomdmo = document.querySelector('.bomdmo');
const aunOffsetTop = aun.offsetTop;
const adeuxOffsetTop = adeux.offsetTop;
const atroisOffsetTop = atrois.offsetTop;
const article = document.querySelector('.article');

const bande = document.querySelector('.bande');



// window.addEventListener('scroll', () => {

// })
// window.addEventListener('scroll', console.log);

// console.log(window.scrollY);



// ABCES VSIBLE

window.addEventListener('scroll', () => {
  if(window.scrollY>= 1560) {
    abces.style.visibility = "hidden";
  } else {
    abces.style.visibility = "visible";
  }
})


// -------------------------------

// 
window.addEventListener('scroll', () => {
    if(window.scrollY>= aunOffsetTop) {
        aun.style.position= 'sticky';
        aun.style.top = 0;
        aun.style.height = "50vh";
        // 
    }
    else{
      aun.style.position = 'static';
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY>= adeuxOffsetTop) {
        adeux.style.position= 'sticky';
        adeux.style.top = 0;
        adeux.style.height = "50vh";
        // 
    }
    else{
      adeux.style.position = 'static';
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY>= atroisOffsetTop) {
        atrois.style.top = 0;
        atrois.style.position= 'sticky';
        atrois.style.height = "50vh";
        // 
    }
    else{
      atrois.style.position = 'static';
    }
});


// let img = document.querySelector("img");
// DragElement(img);