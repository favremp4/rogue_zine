import { DragElement } from "../components/DragElement"


import "../css/reset.css";
/*import "../css/style.css";*/
import "../css/article.css";

let img = document.querySelector(".draggable1");
DragElement(img);
let img2 = document.querySelector(".draggable2");
DragElement(img2);



const titrarticle = document.querySelector('.titrarticle');
const titraOffsetTop = titrarticle.offsetTop;

window.addEventListener('scroll', () => {
    if(window.scrollY>= titraOffsetTop) {
        titrarticle.style.position= 'sticky';
        titrarticle.style.top = 0;
        titrarticle.style.height = "50vh";
        // 
    }
    else{
        titrarticle.style.position = 'static';
    }
});


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

