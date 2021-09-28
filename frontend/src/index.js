fetch('http://localhost:3000/api/teddies')
    .then((response) => response.json())
    .then((response) =>{

            

        let getProducts = "";

        for(let i = 0; i<response.length; i++){

            


        getProducts += 
        `<li class="item">
            <div class="card mb-3">
                <div id="cardProduct" class="row g-0">
                    <div class="col-md-4">
                        <img src="${response[i].imageUrl }" class="img-thumbnail shadow" alt="Ours" />
                    </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="card-title fs-4">${response[i].name}</h2>
                                <p class="card-text">${response[i].description}</p>
                                <p class="card-text text-muted fs-5">${(response[i].price/100).toFixed(2).replace(".",",")}€ </p>
                                <br />
                                <a class="btn btn-outline-primary w-25" href="page_produitALT.html?${response[i]._id}">Voir Produit</a>
                            </div>
                        </div>
                    </div>
                 </div>
            </li>`
        }
        
        document.getElementById("items").innerHTML = getProducts
    })


