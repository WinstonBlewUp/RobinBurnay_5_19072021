//const img = document.getElementById('img');

fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        if (res.ok){
            return res.json();
        }
    })
    