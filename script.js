
 const charname = document.getElementById("heading")


function getchar(){
    fetch("https://gateway.marvel.com:443/v1/public/characters/1009600?apikey=feeb60c154ef25cea582b041281f8828")
    .then(response => response.json())
    .then(article=>{
            const name = article.code;
            console.log(name);

    })
    .catch(err=> {
        console.error(err.message)
    })
}