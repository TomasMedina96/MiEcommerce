import { compras } from "../../componentes/carrito.js";
import { datos } from "../../componentes/carrito.js";
import { getData, setData  } from "../../localStorage.js";
import { deleteData } from "../../localStorage.js";

let bod = document.getElementById("c-container")
let bod1 = document.getElementById("idDatos")



window.addEventListener('load', event =>{
    const pr = getData('Productos')

    let total = 0;
    const ol = pr.map(e=>{

        let subtotal = e.cantidad * e.price
        
        total= total + subtotal

        
        return compras(e.title, e.price, e.cantidad, e.id)
        
        
    }).join('')
    bod1.innerHTML= datos(total.toLocaleString())
    bod.innerHTML = ol


    
})

//click en eliminar
window.addEventListener('click', event => {

    const items = getData('Productos')

    if(event.target.dataset.number == "eliminar")
    {
        const res = items.findIndex(e => e.id == event.target.id)
        items.splice(res, 1)
     
        setData('Productos', items)
        window.location.href ='./carrito.html'
    }

})

//click en comprar
window.addEventListener('click', event => {

    console.dir(event.target.dataset.number)

    if(event.target.dataset.number == "comprar")
    {
        deleteData('Productos')
    }

})

