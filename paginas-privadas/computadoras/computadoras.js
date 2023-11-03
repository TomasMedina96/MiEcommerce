import { cardComponent } from "../../componentes/card.js";



let cardContainer = document.getElementById('c-container');
window.addEventListener('load', () =>{

    fetch('http://127.0.0.1:5500/tablaProd.json').then(response => response.json()).then(productos =>{

    const Cprod = productos.map(e=>{

       if (e.categoria == "Computadoras")
       {
        return cardComponent(e.imagen,e.titulo,e.texto,e.precio)
       } 
        
    }).join('')
    cardContainer.innerHTML = Cprod;

    });

})