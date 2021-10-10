const dataOrder = fetch(`http://localhost:3000/api/teddies/${url_idSliced}`);
        dataOrder.then(async (responseData) => {

            const response = await responseData.json();
               
            
                let registeredProducts = JSON.parse(localStorage.getItem("produit"));
                        

                        const positionElementPanier = document.querySelector(".container_produits");
                        
                        let cardItem = document.querySelector("#item__select");
                        console.log(cardItem);

                        if(registeredProducts === null){
                            const panierVide = `
                            <div class="container_panier_vide">
                            <div class="alert alert-info" role="alert">
                            Votre panier est vide !
                          </div>
                            </div>
                            `;

                            positionElementPanier.innerHTML = panierVide;
                        }else{
                            let StructureProduitPanier = [];

                            for(k = 0; k < registeredProducts.length; k++){
                                
                                StructureProduitPanier = StructureProduitPanier +
                                `
                                <div class="card">
                                
                                    <div class="products_order">
                            
                                            <div class="card" style="width: 18rem;">
                                                <img class="card-img-top" src="${registeredProducts[k].imageUrl}" alt="Card image cap">
                                                <div class="card-body">
                                                    <p class="card-text">${registeredProducts[k].nomProduit}</p>
                                                    <p class="card-text">${registeredProducts[k].color}</p>
                                                    <p class="card-text">${registeredProducts[k].prix}€</p>
                                                </div>
                                            </div>
                                        
                                        <button class="btn-del delete__item"> <i class="bi bi-trash"></i> </button>
                                    </div>
                                </div>
                            
                                 `;
            
                                 //console.log(StructureProduitPanier);
                            }
            
             if(k == registeredProducts.length){
                positionElementPanier.innerHTML = StructureProduitPanier;
             }
             
                        }
                         
    // Btn supprimer article //
    const deleteItem = document.querySelectorAll(".delete__item");
    deleteItem.forEach((btn, index) => {
        btn.addEventListener('click', () => {
        deleteItemSelect(index, registeredProducts);
        });
    });
    
    // // Btn annuler commande //
     const cancelOrdered = document.querySelector(".cancel__ordered");
     cancelOrdered.addEventListener('click', () => {
         cancelMyOrdered();
     });

// Dans LocalStorage : suppression de l'article sélectionné //
function deleteItemSelect(index, registeredProducts) {
registeredProducts.splice(index, 1);
localStorage.setItem('produit', JSON.stringify(registeredProducts));

if (registeredProducts.length === 0) {
    localStorage.removeItem('produit');
}
updateNumberArticles();
}

// Dans LocalStorage : Annulation du panier //
function cancelMyOrdered() {
localStorage.removeItem('produit');
updateNumberArticles();
}

// Dans LocalStorage : Réinitialise le panier et le nombre d'article //
 function updateNumberArticles() {
 positionElementPanier.innerHTML = "";
 showCard();
 itemConfirmation();
 };



});
