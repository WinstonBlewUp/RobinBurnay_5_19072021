

   const dataColors = fetch(`http://localhost:3000/api/teddies/${url_idSliced}`);
        dataColors.then(async (responseData) => {
            console.log(responseData);

            const response = await responseData.json();
                console.log(response)

                var colors = response.colors;
                    console.log(response.colors)


                    const optionQuantite = response.colors;
                        let structureOptions = [];

                    for(let j = 0; j < response.colors.length; j++){

                        structureOptions +=
                        `
                        <option value="${j+1}">${optionQuantite[j]}</option>
                        `;
        
                    }

                    const positionOption = document.querySelector("#colors_select");
                    positionOption.innerHTML = structureOptions;
                        
        })