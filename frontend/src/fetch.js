//objet 01
const dataApi = fetch('http://localhost:3000/api/teddies')

dataApi.then(async (responseData) => {
    //console.log(responseData);

    const response = await responseData.json();
    console.log(response);

    try{
//capture data api objet 0
    for(i =0; i<5; i++){
        const _id = response[i]._id;
        const name = response[i].name;
        const colors = response[i].colors;
        const price = response[i].price;
        const imageUrl = response[i].imageUrl;
        const description = response[i].description;
        
        console.log(_id);
        console.log(name);
        console.log(colors);
        console.log(price);
        console.log(imageUrl);
        console.log(description);

    } 

        //DOM objet affichage

        const affichage_name = document.querySelector("#name");
        const affichage_img01 = document.querySelector("#img01");
        const affichage_price = document.querySelector("#price");
        //affihage img
        const img01 = `<img src="${imageUrl[i]}" class="imgTopCard">`;
        
        affichage_img01.insertAdjacentHTML("afterbegin", img01);
        affichage_name.innerHTML = name;
        affichage_price.innerHTML = price[i];


    } catch(err){
        console.log
    }

})

.catch((err) =>{
    console.log(err)
});



