const dataPanier = fetch(`http://localhost:3000/api/teddies/${url_idSliced}`);
        dataPanier.then(async (responseData) => {
            console.log(responseData);

            const idForm = document.querySelector("#colors_select");
                console.log(idForm);

                const sendCart = document.querySelector("#order");
                    

                    sendCart.addEventListener("click", (event) =>{
                        event.preventDefault();

                        const choiceForm = idForm.value; 
                            console.log(responseData);
                    });
        });