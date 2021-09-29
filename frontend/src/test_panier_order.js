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
                                <td class="old"><img src="${registeredProducts[k].imageUrl}"
                                alt="ours en peluche" style="width:100px;"></td>
                                <td class="old">${registeredProducts[k].nomProduit}</td>
                                <td class="old">${registeredProducts[k].color}</td>
                                <td class="old">${registeredProducts[k].prix}€</td>
                                </tr>
                                <button class="btn-del"> <i class="bi bi-trash"></i> </button>
                                 `;
            console.log(registeredProducts);
                            }
            console.log(StructureProduitPanier);
            
             if(k == registeredProducts.length){
                positionElementPanier.innerHTML = StructureProduitPanier;
             }
             
                        }
            });