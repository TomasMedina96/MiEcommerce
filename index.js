import {navbarC} from "./componentes/navbar.js"
import { getData } from "./data/sessionStorage.js";
import { setData } from "./data/sessionStorage.js";
import { pie } from "./componentes/footer.js";

let navContenedor = document.querySelector('header')
let foot = document.querySelector('footer')

window.addEventListener('load', ()=>{
    navContenedor.innerHTML = navbarC;
    foot.innerHTML = pie;


    const items = getData('Login')
})

const btnIngreso = document.getElementById("btnIngresar")

btnIngreso.addEventListener('click', () =>{
    
    const user = document.getElementById("user").value
    const pass = document.getElementById("password").value
    if(user != "" && pass != "")
    {
        const login = {
            usuario: user,
            contrasena: pass
        }
    
        const items = getData('Login')
             
        items.push(login)
        console.log(items)
    
        setData('Login', items)

    }

})