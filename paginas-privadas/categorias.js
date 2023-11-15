import { cardComponent } from "../../componentes/card.js";
import { getData  } from "../../data/localStorage.js";
import { setData } from "../../data/localStorage.js";

let title = document.querySelector(".titulo").id



let cardContainer = document.getElementById('c-container');
window.addEventListener('load', () =>{

    fetch('http://127.0.0.1:5500/tablaProd.json').then(response => response.json()).then(productos =>{

    const Cprod = productos.map(e=>{

       if (e.categoria == title)
       {
        return cardComponent(e.imagen,e.titulo,e.texto,e.precio,e.id)
       } 
        
    }).join('')
    cardContainer.innerHTML = Cprod;

    });

})


//click en agregar al carrito
window.addEventListener('click', event => {

    let cantidad = document.getElementById("cantidadC").value
    if(event.target.dataset.number == "agregar")
    {
        fetch('http://127.0.0.1:5500/tablaProd.json').then(response => response.json()).then(productos =>{



        const Cprod = productos.map(e=>{
    
            if (e.id == event.target.id && cantidad != '0')
            { 
     
                const newItem = {
                    id: e.id,
                    title: e.titulo,
                    price: e.precio,
                    cantidad: event.target.offsetParent.childNodes[5].childNodes[1].childNodes[3].childNodes[1].value
                }
            
    
                const items = getData('Productos')
                items.push(newItem)
            
                console.log(items)
            
                setData('Productos', items)
    
     
            }

             
         }).join('')
         
    
         console.log(Cprod)
    
    })
    }

})