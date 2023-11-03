import {navbarC} from "./componentes/navbar.js"



let navContenedor = document.querySelector('header')

window.addEventListener('load', ()=>{
    navContenedor.innerHTML = navbarC;

})