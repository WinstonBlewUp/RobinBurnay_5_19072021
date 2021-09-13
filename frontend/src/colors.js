

   const dataColors = fetch(`http://localhost:3000/api/teddies/${url_idSliced}`);
        dataColors.then(async (responseData) => {
            console.log(responseData);

            const response = await responseData.json();
                console.log(response)

                var colors = response.colors;
                    console.log(response.colors)

                    for(let i = 0; i<response.colors.length; i++){
                        const affichage_colors = document.querySelector(".colors")
                        affichage_colors.innerHTML = colors;
                    }
        })