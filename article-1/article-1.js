import { DragElement } from "../components/DragElement"


import "../css/reset.css";
/*import "../css/style.css";*/
import "../css/article.css";







const abces = document.querySelector('.abces');


//---------------------------------------------------

const abcesOffsetTop = abces.offsetTop;

window.addEventListener('scroll', () => {
    if(window.scrollY<= 800) {                
        abces.style.visibility='hidden'; 
    }
    else{
        abces.style.visibility='visible';            
    }
});
let img = document.querySelector(".draggable1");
DragElement(img);
let img2 = document.querySelector(".draggable2");
DragElement(img2);
let img3 = document.querySelector(".draggable3");
DragElement(img3);
let img4 = document.querySelector(".draggable4");
DragElement(img4);

//----------------------------------------------------


