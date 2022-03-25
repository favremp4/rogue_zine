import { DragElement } from "../components/DragElement"


import "../css/reset.css";
/*import "../css/style.css";*/
import "../css/article.css";

let img = document.querySelector("img");
DragElement(img);

const navigation = document.querySelector('.navigation');

const navigationOffsetTop = navigation.offsetTop;

window.addEventListener('scroll', () => {
    if(window.scrollY<= 800) {
        
        
        navigation.style.visibility='hidden';
       
        
    }
    else{
        navigation.style.visibility='visible';
      
      
    }
});

