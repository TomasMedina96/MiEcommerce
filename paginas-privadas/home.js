import { cardComponent } from "../../componentes/card.js";

let cardContainer = document.getElementById('c-container');
fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(sn=>{
        
console.log(sn)

const Cprod = sn.map(e=>{
        return cardComponent(e.image,e.title,e.description,e.price)
    }).join('')

    cardContainer.innerHTML = Cprod;
    
        })

