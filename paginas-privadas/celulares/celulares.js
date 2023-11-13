import { cardComponent } from "../../componentes/card.js";
import { getData  } from "../../localStorage.js";
import { setData } from "../../localStorage.js";
import { deleteData } from "../../localStorage.js";


let cardContainer = document.getElementById('c-container');

window.addEventListener('load', event =>{

   fetch('http://127.0.0.1:5500/tablaProd.json').then(response => response.json()).then(productos =>{

    const Cprod = productos.map(e=>{

       if (e.categoria == "Celulares")
       { 
        return cardComponent(e.imagen,e.titulo,e.texto,e.precio,e.id)


       } 
        
    }).join('')
    
    cardContainer.innerHTML = Cprod;

    });
})


window.addEventListener('click', event => {

    fetch('http://127.0.0.1:5500/tablaProd.json').then(response => response.json()).then(productos =>{


    const Cprod = productos.map(e=>{

        if (e.id == event.target.id)
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
})

