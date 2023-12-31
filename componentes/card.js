
export const cardComponent = (image,titulo,texto,precio,id) =>{ 

return ` 
<div class="card-group">
        <div class="card my-2" id="cards">
            <img src="${image}" alt="item">
            <div class="card-body" id="ACAACA">
                <h5 class="card-title text-center" id="titleC">${titulo} </h5>
                <p class="card-text textC" id="textC">${texto}</p>
            </div>   
            <div class="card-footer">
                <div class="row text-center">
                    <div class="col col-sm-12">
                        <p class="price" id="priceC">$${precio}</p>
                    </div>
                    <div class="col">
                        <input type="number" class="form-control numericUpDown" id="${id}" value="0" placeholder="0" min="0" max="10" step="1" id="cantidadC">
                    </div>
                    <div class="col carritobtn">
                    <button class="btn" data-number="agregar" id="${id}" id="btncarrito"><img class="carritoicono" data-number="agregar" id="${id}"  src="../../imagenes/carrito.png" alt=""></button>                                  
                    </div>                   
                </div>                      
            </div>
        </div>
        </div>
`}


