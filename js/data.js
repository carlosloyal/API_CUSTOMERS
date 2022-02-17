const button1 = document.getElementById('button-1')
const cards = document.getElementById('cards')
const API = "https://jsonplaceholder.typicode.com/users";

const resultadosData = (api) => {
    fetch(api)
    .then ((responsive) =>{
        return responsive.json()
    })
    .then ((datos) =>{
        button1.onclick = function(){
            mostrarCards(datos)
        }
    })
    .catch((error) =>{
        console.log(error)
    })
}

const mostrarCards = (datos) => {
    let Mcards = ''
    datos.forEach((item) => {
        Mcards += `<div class="col-6 mt-3 d-flex justify-content-center">
            <div class="card">
                <h6 class="text-white mt-3 text-center">Name: ${item['name']}</h6>
                <p class="text-white text-center">Email: ${item['email']}</p>
                <p class="text-white text-center">Location: ${item['address']['street']}</p>
            </div>
        </div>`
        cards.innerHTML = Mcards
    })
}
resultadosData(API)