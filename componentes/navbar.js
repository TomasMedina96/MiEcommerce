const url = 'http://127.0.0.1:5500/'
const TitulosyDirecciones = [
    {titulo:'Computadoras', link: `${url}../../paginas-privadas/computadoras/computadoras.html`},
    {titulo:'Televisores', link:`${url}../../paginas-privadas/televisores/televisores.html`},
    {titulo:'Celulares', link:`${url}../../paginas-privadas/celulares/celulares.html`},
    {titulo:'Carrito de compras', link:`${url}../../paginas-privadas/carrito/carrito.html`}     
]

export const navbarC = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <a href="../../paginas-privadas/home.html" class="navbar-brand"><img class="icono-tienda" src="../../imagenes/icono-tienda.png" alt=""></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollpase" aria-controls="navbarCollpase" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollpase">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="../../paginas-privadas/home.html" class="nav-link">Home</a>
            </li>
            ${TitulosyDirecciones.map(e =>{
                return `
                <li class="nav-item">
                <a href="${e.link}" class="nav-link">${e.titulo}</a>
                </li>`            
            }).join('')
            }
        </ul>
        <a class="btn btn-danger ms-auto" href="../../paginas-publicas/login.html" role="button"><i class="bi bi-box-arrow-left"></i></a>
    </div>
</div>
</nav>`