import { compras } from "../../componentes/carrito.js";
import { getData  } from "../../localStorage.js";
//import { deleteData } from "../../localStorage.js";

let bod = document.getElementById("c-container")
let Importe = document.getElementById("inputTotal").value

window.addEventListener('load', () =>{
    const pr = getData('Productos')

    let total = 0;
    const ol = pr.map(e=>{

        total = total + (e.cantidad * e.price)
        Importe = total
        return compras(e.title, e.price, e.cantidad, e.id)
        
        
    }).join('')
    
    bod.innerHTML = ol


    

})