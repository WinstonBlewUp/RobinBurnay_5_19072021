const dataPanier = fetch(`http://localhost:3000/api/teddies/${url_idSliced}`);
        dataPanier.then(async (responseData) => {

            const response = await responseData.json();
                console.log(response)
            
            const idForm = document.querySelector("#colors_select");   

                 

                    sendCart = document.querySelector("#order");
                        sendCart.addEventListener("click", (event) => {

                            const choiceForm = idForm.value; 
                    console.log(choiceForm); 
                    
                    let optionProduit = {
                        nomProduit : response.name,
                        id : response._id,
                        color : choiceForm,
                        prix : (response.price/100).toFixed(2).replace(".",",")
                    }

                    console.log(optionProduit);

                    let productLocalStorage = JSON.parse(localStorage.getItem("produit"));


                    const popupConfirmation = () =>{
                        if(window.confirm(`${response.name} couleur : ${choiceForm} a bien été ajouté au panier
Consultez le panier OK ou continuer vos achats ANNULER`)){
                            window.location.href = "panier.html";
                        }else{
                            window.location.href = "index.html";
                        }
                    };


                    if(productLocalStorage){
                        productLocalStorage.push(optionProduit);
                        localStorage.setItem("produit", JSON.stringify(productLocalStorage));
                        popupConfirmation();
                    } else{
                        productLocalStorage = [];
                        productLocalStorage.push(optionProduit);
                        localStorage.setItem("produit", JSON.stringify(productLocalStorage));

                        console.log(productLocalStorage);
                    };

                    //affichage produit panier
                    console.log(productLocalStorage);
                        });

                    
                        
           
        });