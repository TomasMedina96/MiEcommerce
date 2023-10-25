import { cardComponent } from "../../componentes/card.js";

const productos =[
    {imagen:'../../imagenes/televisor.jpg',titulo:'titulo',texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas voluptatem recusandae pariatur ullam, impedit rerum, fugit nemo numquam architecto modi ab optio laborum doloribus voluptate officiis a omnis voluptates?',precio:'2000'},
    {imagen:'../../imagenes/televisor.jpg',titulo:'titulo',texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas voluptatem recusandae pariatur ullam, impedit rerum, fugit nemo numquam architecto modi ab optio laborum doloribus voluptate officiis a omnis voluptates?',precio:'2000'},
    {imagen:'../../imagenes/televisor.jpg',titulo:'titulo',texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas voluptatem recusandae pariatur ullam, impedit rerum, fugit nemo numquam architecto modi ab optio laborum doloribus voluptate officiis a omnis voluptates?',precio:'2000'},
    {imagen:'../../imagenes/televisor.jpg',titulo:'titulo',texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas voluptatem recusandae pariatur ullam, impedit rerum, fugit nemo numquam architecto modi ab optio laborum doloribus voluptate officiis a omnis voluptates?',precio:'2000'},
    {imagen:'../../imagenes/televisor.jpg',titulo:'titulo',texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas voluptatem recusandae pariatur ullam, impedit rerum, fugit nemo numquam architecto modi ab optio laborum doloribus voluptate officiis a omnis voluptates?',precio:'2000'},
    {imagen:'../../imagenes/televisor.jpg',titulo:'titulo',texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas voluptatem recusandae pariatur ullam, impedit rerum, fugit nemo numquam architecto modi ab optio laborum doloribus voluptate officiis a omnis voluptates?',precio:'2000'},
    {imagen:'../../imagenes/televisor.jpg',titulo:'titulo',texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas voluptatem recusandae pariatur ullam, impedit rerum, fugit nemo numquam architecto modi ab optio laborum doloribus voluptate officiis a omnis voluptates?',precio:'2000'},
    {imagen:'../../imagenes/televisor.jpg',titulo:'titulo',texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas voluptatem recusandae pariatur ullam, impedit rerum, fugit nemo numquam architecto modi ab optio laborum doloribus voluptate officiis a omnis voluptates?',precio:'2000'}
]


let cardContainer = document.getElementById('c-container');
window.addEventListener('load', () =>{

    const Cprod = productos.map(e=>{
        return cardComponent(e.imagen,e.titulo,e.texto,e.precio)
    }).join('')
    cardContainer.innerHTML = Cprod;
})