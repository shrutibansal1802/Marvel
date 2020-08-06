const div = document.getElementById("poster")

const key ="feeb60c154ef25cea582b041281f8828"
const hash = "c5a95c638e95318764e70214061d8c0e"

// function getchar(){
    div.innerHTML=""
    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009368/comics?ts=1&apikey=${key}&hash=${hash}`)
    .then(response => response.json())
    .then(data => {
        const results= data.data.results

        results.forEach(result => {
           if(result.images[0]!=null){

            const source = result.images[0].path + ".jpg"
            const parentpanel = document.createElement("div")
            parentpanel.classList+="parentpanel"
            const panel = document.createElement("div");
            const paneltext =document.createElement("p");
            paneltext.textContent= result.title;
            panel.classList+= "panel"
            panel.style.backgroundImage =`url(${source})`

            panel.appendChild(paneltext)
            parentpanel.appendChild(panel)
            div.appendChild(parentpanel)
           }
        });
    }
    )

    .catch(err=> {
        console.error(err.message)
    })
// }