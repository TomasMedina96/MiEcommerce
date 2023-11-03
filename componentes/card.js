
export const cardComponent = (image,titulo,texto,precio) =>{ 

return ` 
    <div class="col">
        <div class="card my-2">
            <img src="${image}" alt="item">
            <div class="card-body">
                <h5 class="card-title">${titulo} </h5>
                <p class="card-text">${texto}</p>
            </div>   
            <div class="card-footer">
                <div class="row text-center">
                    <div class="col">
                        <p class="price">$${precio}</p>
                    </div>
                    <div class="col">
                        <input type="number" class="form-control numericUpDown" placeholder="0" min="0" max="10" step="1">
                    </div>
                    <div class="col">
                    <input type="button" class="btn btn-success" value="Añadir al carrito" >
                    </div>                   
                </div>                      
            </div>
        </div>
    </div>
`}