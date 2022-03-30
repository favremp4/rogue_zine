import { DragElement } from "../components/DragElement"


import "../css/reset.css";
/*import "../css/style.css";*/
import "../css/article.css";



const abces = document.querySelector('.abces');
const links = document.querySelector('.a2');
const links2 = document.querySelector('.a4');


//---------------------------------------------------



window.addEventListener('scroll', () => {
    if(window.scrollY<= 800) {                
        abces.style.visibility='hidden'; 
    }
    else{
        abces.style.visibility='visible';            
    }
});
window.addEventListener('scroll', () => {
    if(window.scrollY> 700) {                
        links.style.color="black"; 
    }
    else{
        links.style.color="white";            
    }
});
window.addEventListener('scroll', () => {
    if(window.scrollY> 700) {                
        links2.style.color="black"; 
    }
    else{
        links2.style.color="white";            
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


