//objet 01
const dataApi = fetch('http://localhost:3000/api/teddies')

dataApi.then(async (responseData) => {
    //console.log(responseData);

    const response = await responseData.json();
    console.log(response[0]);

    try{
//capture data api objet 0
    for(i = 0; i<5; i++){}
        const _id = response[0]._id;
        const name = response[0].name;
        const colors = response[0].colors;
        const price = response[0].price;
        const imageUrl = response[0].imageUrl;
        const description = response[0].description;
        
        console.log(_id);
        console.log(name);
        console.log(colors);
        console.log(price);
        console.log(imageUrl);
        console.log(description);

        /*for(i = 0; i<5; i++){
            console.log(response[i].name)}*/

        //DOM objet affichage

        const affichage_name = document.querySelector("#name");
        const affichage_img01 = document.querySelector("#img01");
        const affichage_price = document.querySelector("#price");
        //affihage img
        const img01 = `<img src="${imageUrl}" class="imgTopCard">`;
        
        affichage_img01.insertAdjacentHTML("afterbegin", img01);
        affichage_name.innerHTML = name;
        affichage_price.innerHTML = price;


    } catch(err){
        console.log
    }

})

.catch((err) =>{
    console.log(err)
});



