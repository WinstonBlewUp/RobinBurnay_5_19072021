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
                            
                                            <div class="card-prod" style="width: 18rem;">
                                                <img class="card-img-top" src="${registeredProducts[k].imageUrl}" alt="Card image cap">
                                                <div class="title_container">
                                                    <div class="card-title"></div>   
                                                        <h5 class="card_title">Nom</h5>
                                                        <p class="card-text">${registeredProducts[k].nomProduit}</p>
                                                    </div>
                                                    <div class="card-title">
                                                        <h5 class="card_title">Couleur</h5>
                                                        <p class="card-text">${registeredProducts[k].color}</p>
                                                    </div>
                                                    <div class="card-title"> 
                                                        <h5 class="card_title">Prix</h5>
                                                        <p class="card-text">${registeredProducts[k].prix}€</p>
                                                    </div>
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

    //total prix commande
    total = total + (registeredProducts.price);
    console.log(total);                   
    const cartTotal = document.querySelector(".cartTotal");
    console.log(cartTotal);
    const priceCart = `<h5 class=" cart-section card-title">Votre total est de :${(total/100).toFixed(2).replace(".",",")}€</h5>`;
    cartTotal.innerHTML = priceCart;
                         
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
