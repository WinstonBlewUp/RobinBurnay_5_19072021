let cardItem = document.querySelector("#item__select");
let total = 0;
// Affichage du panier //
showCard()

// Création du panier + bouton suppression et d'annulation + formulaire de confirmation //
function showCard() {

    if (localStorage.getItem('anyItem') !== null) {

        let items = JSON.parse(localStorage.getItem('anyItem'));
        total = 0; // Initialisation du total à 0 //

        cardItem.insertAdjacentHTML("afterbegin",
            `<div class="card text-center">
                <div class="card-body">
                <h5 class="card-title">Récapitulatif de votre panier</h5>
                    <div class= "table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                        <th scope="col">Article</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Couleurs</th>
                        <th scope="col">Prix</th>
                        </tr>
                        </thead>
                        <tbody class="order__details"></tbody>
                    </table>
                    </div>
                </div>
            </div>`
        );
        
        let showCartProduct = "";
        // Affichage des articles selectionnés + couleur + prix //
        items.forEach( (product, index) => {
            
            total = total + (product.price);

            showCartProduct +=
                    `<tr>
                        <td class="old"><img src="${product.imageUrl}"
                        alt="ours en peluche" style="width:100px;"></td>
                        <td class="old">${product.name}</td>
                        <td class="old">${product.selectColors}</td>
                        <td class="old">${(product.price/100).toFixed(2).replace(".",",")}€</td>
                        <td><button class="delete__item ${index} btn btn-outline-danger" 
                        aria-label="Supprimer l'article"><i class="bi bi-trash"></i></button></td>
                    </tr>`
            document.querySelector(".order__details").innerHTML = showCartProduct;
        })

        // Affichage du panier total + btn annuler commande //
        cardItem.insertAdjacentHTML("beforeend",
            `<div class="card text-center mx-auto w-50">
                <div class="card-header">
                    Total de votre commande
                </div>
                <div class="card-body">
                    <h5 class=" cart-section card-title">${(total/100).toFixed(2).replace(".",",")}€</h5>
                    <a href="./index.html" class="btn btn-outline-primary btn-sm">
                    Continuer mes achats
                    </a>
                    <button class="cancel__ordered btn btn-outline-danger btn-sm">
                    Annuler le panier
                    </button>
                </div>
                <div class="card-footer text-muted">
                Formulaire de validation
                </div>
            </div>`
        );
        // Formulaire de confirmation //
        cardItem.insertAdjacentHTML("beforeend",
            `<div class="card-body mx-auto" style="max-width: 30rem" ;>
            <form
              type="submit"
              class="contact__form row g-3"
              action="post"       
              >
              <div class="col-md-6 details__form">
                <label for="firstname" class="form-label">Prénom</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  maxlength="25" pattern="[a-zA-ZÀ-ÿ]{2,}"
                  required
                />
              </div>
              <div class="col-md-6 details__form">
                <label for="name" class="form-label">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  maxlength="25" pattern="[a-zA-ZÀ-ÿ]{1,}"
                  required
                />
              </div>
              <div class="col-md-6 details__form">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}"
                  required
                />
              </div>
              <div class="col-12 details__form">
                <label for="address" class="form-label">Addresse</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  maxlength="50"
                  required
                />
              </div>
              <div class="col-md-6 details__form">
                <label for="city" class="form-label">Ville</label>
                <input type="text"
                class="form-control"
                id="city"
                maxlength="50"
                required />
              </div>
              <div class="d-grid gap-2">
                <button id="submit" class="validate btn btn-primary">
                  Confirmation
                </button>
              </div>
            </form>
          </div>`
        );

        // Btn supprimer article //
        const deleteItem = document.querySelectorAll(".delete__item");
        deleteItem.forEach((btn, index) => {
            btn.addEventListener('click', () => {
            deleteItemSelect(index, items);
            });
        });
        
        // Btn annuler commande //
        const cancelOrdered = document.querySelector(".cancel__ordered");
        cancelOrdered.addEventListener('click', () => {
            cancelMyOrdered();
        });

        // Validation du formulaire //
        const form = document.querySelector(".contact__form");
        form.addEventListener('submit', e => {
            e.preventDefault();
            sendform();
        });

        // Sinon : Message Panier vide //
    } else {
        cardItem.insertAdjacentHTML("afterbegin",
            `<div class="card text-center mx-auto w-50">
                <div class="card-header">
                Votre panier
                </div>
                <div class="card-body">
                    <h5 class="cart-section card-title">Votre panier est vide !</h5>
                    <a href="./index.html" class="btn btn-outline-primary">
                    Retour à la page d'accueil
                    </a>
                </div>
            </div>`
        )
    }
}


// Dans LocalStorage : suppression de l'article sélectionné //
function deleteItemSelect(index, items) {
    items.splice(index, 1);
    localStorage.setItem('anyItem', JSON.stringify(items));

    if (items.length === 0) {
        localStorage.removeItem('anyItem');
    }
    updateNumberArticles();
}

// Dans LocalStorage : Annulation du panier //
function cancelMyOrdered() {
    localStorage.removeItem('anyItem');
    updateNumberArticles();
}

// Dans LocalStorage : Réinitialise le panier et le nombre d'article //
function updateNumberArticles() {
    cardItem.innerHTML = "";
    showCard();
    itemConfirmation();
}

// Récuperation des valeurs du formulaire + l'id des produits //
function sendform() {
    let contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    };

    let products = [];
    if (localStorage.getItem('anyItem') !== null) {
        let productTab = JSON.parse(localStorage.getItem('anyItem'));
        
        productTab.forEach( p => {
            products.push(p._id);
        })
    }
    
    let contactItems = JSON.stringify({
        contact, products
    })
    postOrder(contactItems);
};

// Envoi des données du formulaire + le ou les id(s) : requête POST //
function postOrder(contactItems) {

    fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode:'cors',
        body: contactItems
    }).then(response => {
        return response.json();

    })
    // Enregistre les infos du formulaire + id + total de la commande pour affichage dans la page confirmation.html //
    .then( r => {
        localStorage.setItem('contact', JSON.stringify(r.contact));
        localStorage.setItem('orderId', JSON.stringify(r.orderId));
        localStorage.setItem('total', JSON.stringify(total));
        localStorage.removeItem('anyItem');
        window.location.replace("./confirmation.html");
    })
    .catch((e) => {
        displayError();
        console.log(e);
    })
}