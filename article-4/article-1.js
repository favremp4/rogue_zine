import { DragElement } from "../components/DragElement"


import "../css/reset.css";
/*import "../css/style.css";*/
import "../css/article4.css";


// IMAGES DRAG


let img = document.querySelector(".draggable1");
DragElement(img);
let img2 = document.querySelector(".draggable2");
DragElement(img2);







// CONST

const aun = document.querySelector('.a1');
const adeux = document.querySelector('.a2');
const atrois = document.querySelector('.a3');
const aquatre = document.querySelector('.a4');
const acinq = document.querySelector('.a5');
const asix = document.querySelector('.a6');

const aunOffsetTop = aun.offsetTop;
const adeuxOffsetTop = adeux.offsetTop;
const atroisOffsetTop = atrois.offsetTop;
const aquatreOffsetTop = aquatre.offsetTop;
const acinqOffsetTop = acinq.offsetTop;
const asixOffsetTop = asix.offsetTop;




const grille = document.querySelector('.grille');

const gr1 = document.querySelector('.gr1');
const gr2 = document.querySelector('.gr2');
const gr3 = document.querySelector('.gr3');
const gr4 = document.querySelector('.gr4');
const gr5 = document.querySelector('.gr5');
const gr6 = document.querySelector('.gr6');

const droite = document.querySelector('.droite');

const d1 = document.querySelector('.d1');
const d2 = document.querySelector('.d2');
const d3 = document.querySelector('.d3');
const d4 = document.querySelector('.d4');
const d5 = document.querySelector('.d5');
const d6 = document.querySelector('.d6');

const gauche = document.querySelector('.gauche');

const ga1 = document.querySelector('.ga1');
const ga2 = document.querySelector('.ga2');
const ga3 = document.querySelector('.ga3');
const ga4 = document.querySelector('.ga4');
const ga5 = document.querySelector('.ga5');
const ga6 = document.querySelector('.ga6');


// figer paragraphes

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
        atrois.style.position= 'sticky';
        atrois.style.top = 0;
        atrois.style.height = "50vh";
        // 
    }
    else{
      atrois.style.position = 'static';
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY>= aquatreOffsetTop) {
        aquatre.style.position= 'sticky';
        aquatre.style.top = 0;
        aquatre.style.height = "50vh";
        // 
    }
    else{
      aquatre.style.position = 'static';
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY>= acinqOffsetTop) {
        acinq.style.position= 'sticky';
        acinq.style.top = 0;
        acinq.style.height = "50vh";
        // 
    }
    else{
      acinq.style.position = 'static';
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY>= asixOffsetTop) {
        asix.style.position= 'sticky';
        asix.style.top = 0;
        asix.style.height = "50vh";
        // 
    }
    else{
      asix.style.position = 'static';
    }
});



