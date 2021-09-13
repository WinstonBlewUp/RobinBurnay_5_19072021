const queryString_url_id = window.location.search;
  //  console.log(queryString_url_id)

const url_idSliced = queryString_url_id.slice(1);
    //console.log(url_idSliced);

   const data = fetch(`http://localhost:3000/api/teddies/${url_idSliced}`);
        data.then(async (responseData) => {
            console.log(responseData);

            const response = await responseData.json();
                console.log(response)
            try{
                const name = response.name;
                const price = (response.price/100).toFixed(2).replace(".",",");
                const description = response.description;
                const colors = response.colors;
                const imageUrl = response.imageUrl;

                const affichage_name = document.querySelector("#name");
                const affichage_price = document.querySelector("#price");
                const affichage_img = document.querySelector("#img");

                const image = `<img src="${imageUrl}" class="imgTopCard">`;

                affichage_name.innerHTML = name;
                affichage_price.innerHTML = price;
                affichage_img.insertAdjacentHTML("afterbegin", image);

                

            
            } catch(err){
                console.log
            }
        })

   

        