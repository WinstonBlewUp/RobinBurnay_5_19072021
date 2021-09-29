

   const dataColors = fetch(`http://localhost:3000/api/teddies/${url_idSliced}`);
        dataColors.then(async (responseData) => {
            

            const response = await responseData.json();
                

                var colors = response.colors;
                    


                    const optionQuantite = response.colors;
                        let structureOptions = [];

                    for(let j = 0; j < response.colors.length; j++){

                        structureOptions +=
                        `
                        <option value="${optionQuantite[j]}">${optionQuantite[j]}</option>
                        `;
        
                    }

                    const positionOption = document.querySelector("#colors_select");
                    
                    positionOption.innerHTML = structureOptions;
        
        });

        