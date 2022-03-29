import { DragElement } from "../components/DragElement"


import "../css/reset.css";
/*import "../css/style.css";*/
import "../css/article.css";

let img = document.querySelector(".draggable1");
DragElement(img);
let img2 = document.querySelector(".draggable2");
DragElement(img2);
let img3 = document.querySelector(".draggable3");
DragElement(img3);
let img4 = document.querySelector(".draggable4");
DragElement(img4);








const abces = document.querySelector('.abces');



//---------------------------------------------------

const titrarticle = document.querySelector('.titrarticle');
const titrartScrollTop = titrarticle.scrollTop;
const ensemble = document.querySelector('.ensemblegrille1');
const grilleeScrollHeight = grille.scrollHeight;
const grille2 = document.querySelector('.grille2');
const grille2OffsetTop = grille2OffsetTop;




window.addEventListener('scroll', () => {
    if(window.scrollY<= 800) {                
        abces.style.visibility='hidden'; 
    }
    else{
        abces.style.visibility='visible';            
    }
});

//----------------------------------------------------

window.addEventListener('scroll', () => {
    if(window.scrollY>= titrartScrollTop) {
        titrarticle.style.position= 'sticky';
        titrarticle.style.top = 0;
        
        // 
    }
    else{
        titrarticle.style.position = 'static';
    }
});
window.addEventListener('scroll', () => {
    if(window.scrollY>= grilleeScrollHeight) {
        grille.style.position= 'sticky';
        grille.style.top = 0;
        
        // 
    }
    else{
        grille.style.position = 'static';
    }
});

