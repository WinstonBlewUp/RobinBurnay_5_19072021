const dataOrder = fetch(`http://localhost:3000/api/teddies/${url_idSliced}`);
        dataOrder.then(async (responseData) => {

            const response = await responseData.json();
               
            
                let registeredProducts = JSON.parse(localStorage.getItem("produit"));
                        

                        const positionElementPanier = document.querySelector(".container_produits");
                        

                        if(registeredProducts === null){
                            const panierVide = `
                            <div class="container_panier_vide">
                                <div>Le panier est vide</div>
                            </div>
                            `;

                            positionElementPanier.innerHTML = panierVide;
                        }else{
                            let StructureProduitPanier = [];

                            for(k = 0; k < registeredProducts.length; k++){
                                
                                StructureProduitPanier = StructureProduitPanier +
                                `
                                <tr>
                                <td class="old"><img src="${response[k].imageUrl}"
                                alt="ours en peluche" style="width:100px;"></td>
                                <td class="old">${registeredProducts[k].name}</td>
                                <td class="old">${registeredProducts[k].color}</td>
                                <td class="old">${(registeredProducts[k].price/100).toFixed(2).replace(".",",")}€</td>
                            </tr>
            `;
            console.log(registeredProducts);
                            }
            console.log(StructureProduitPanier);
            
             if(k == registeredProducts.length){
                positionElementPanier.innerHTML = StructureProduitPanier;
             }
             
                        }
            });