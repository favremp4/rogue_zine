import { DragElement } from "../components/DragElement"


import "../css/reset.css";
/*import "../css/style.css";*/
import "../css/article.css";

let img = document.querySelector(".draggable1");
DragElement(img);
let img2 = document.querySelector(".draggable2");
DragElement(img2);






const abces = document.querySelector('.abces');

const abcesOffsetTop = abces.offsetTop;

window.addEventListener('scroll', () => {
    if(window.scrollY<= 800) {
        
        
        abces.style.visibility='hidden';
       
        
    }
    else{
        abces.style.visibility='visible';
      
      
    }
});


//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------




// let img = document.querySelector(".draggable1");
// DragElement(img);
// let img2 = document.querySelector(".draggable2");
// DragElement(img2);
// let img3 = document.querySelector(".draggable3");
// DragElement(img3);
// let img4 = document.querySelector(".draggable4");
// DragElement(img4);



const titrarticle = document.querySelector('.titrarticle');
const chaparticle = document.querySelector('.chaparticle');
const intrarticle = document.querySelector('.intrarticle');

const grille1 = document.querySelector('.grille1');
const grille2 = document.querySelector('.grille2');
const grille3 = document.querySelector('.grille3');
const grille4 = document.querySelector('.grille4');
const grille5 = document.querySelector('.grille5');

const titrartOffsetTop = titrarticle.offsetTop;
const chapartOffsetTop = titrarticle.offsetTop;
const intrartOffsetTop = titrarticle.offsetTop;

const grille1OffsetTop = grille1.offsetTop;
const grille2OffsetTop = grille2.offsetTop;
const grille3OffsetTop = grille3.offsetTop;
const grille4OffsetTop = grille4.offsetTop;
const grille5OffsetTop = grille5.offsetTop;

// const aun = document.querySelector('.a1');
// const adeux = document.querySelector('.a2');
// const atrois = document.querySelector('.a3');
const bomdmo = document.querySelector('.bomdmo');
const aunOffsetTop = aun.offsetTop;
const adeuxOffsetTop = adeux.offsetTop;
const atroisOffsetTop = atrois.offsetTop;
const article = document.querySelector('.article');
const bande = document.querySelector('.bande');

// const abces = document.querySelector('.abces');


// //---------------------------------------------------

// const abcesOffsetTop = abces.offsetTop;

// window.addEventListener('scroll', () => {
//     if(window.scrollY<= 800) {                
//         abces.style.visibility='hidden'; 
//     }
//     else{
//         abces.style.visibility='visible';            
//     }
// });

//----------------------------------------------------

window.addEventListener('scroll', () => {
    if(window.scrollY>= titrartOffsetTop) {
        titrarticle.style.position= 'sticky';
        titrarticle.style.top = 0;
        titrarticle.style.height = "50vh";
        // 
    }
    else{
        titrarticle.style.position = 'static';
    }
});

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

