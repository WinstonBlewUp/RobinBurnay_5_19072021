//objet 01
const dataApi = fetch('http://localhost:3000/api/teddies')

dataApi.then(async (responseData) => {
    //console.log(responseData);

    const response = await responseData.json();
    console.log(response[0]);

    try{
//capture data api objet 0
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

        //DOM objet affichage

       /* const affichage__id = document.querySelector(#_id);
        affichage__id.innerHTML = _id;
        //lignes a executer pour integrer les valeurs au html*/
        const affichage_img01 = document.querySelector("#img01");
        //affihage img
        const img01 = `<img src="${imageUrl}" style="width: 150px;
        border: 1px solid red;
        height: 150px;
        object-fit: cover;
        margin-left: 50px;">`;
        
        affichage_img01.insertAdjacentHTML("afterbegin", img01)


    } catch(err){
        console.log
    }
})

.catch((err) =>{
    console.log(err)
});



