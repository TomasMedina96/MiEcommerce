import {navbarC} from "./componentes/navbar.js"
import { getData } from "./sessionStorage.js";
import { setData } from "./sessionStorage.js";

let navContenedor = document.querySelector('header')

window.addEventListener('load', ()=>{
    navContenedor.innerHTML = navbarC;

    const items = getData('Login')
})

const btnIngreso = document.getElementById("btnIngresar")

btnIngreso.addEventListener('click', () =>{

    const user = document.getElementById("user").value
    const pass = document.getElementById("password").value

    const login = {
        usuario: user,
        contrasena: pass
    }

    const items = getData('Login')
         
    items.push(login)
    console.log(items)

    setData('Login', items)

})