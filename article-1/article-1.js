import { DragElement } from "../components/DragElement"


import "../css/reset.css";
/*import "../css/style.css";*/
import "../css/article.css";

let img = document.querySelector(".draggable");
DragElement(img);



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

