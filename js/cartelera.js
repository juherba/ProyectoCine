const nav = document.getElementById('nav')
const items = document.getElementById('items')
const templateCard = document.getElementById('template_card').content;
const fragment = document.createDocumentFragment()
var today = new Date();
var dd = today.getDay();
today = dd;
var reserva
var user = localStorage.getItem('user')

if (localStorage.getItem('reserva') == null) {
    reserva = {}
} else {
    reserva = JSON.parse(localStorage.getItem('reserva'))
}

if (localStorage.getItem('cklogin') == null) {
    alert("Primerament t'has de donar d'alta trampós!")
    window.location.href = "index.html"
} else if (localStorage.getItem('cklogin') == 0) {
    alert("Primerament t'has de donar d'alta trampós!")
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    nav.style.display = "flex"
})

const fetchData = async() => {
    try {
        const peli = await fetch('json/cartelera.json')
        const data = await peli.json()
        pintarCard(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


const pintarCard = data => {
    data.forEach(element => {
        templateCard.querySelector('h5').textContent = element.nombrePeli
        if (dd == 1 || dd == 2 || dd == 4 || dd == 5) {
            templateCard.querySelector('span').textContent = element.precioNormal
        } else if (dd == 3) {
            templateCard.querySelector('span').textContent = element.precioDespectador
        } else {
            templateCard.querySelector('span').textContent = element.precioFSemana
        }
        templateCard.querySelector('img').setAttribute("src", element.img)
        templateCard.querySelector('.prota').textContent = element.protagonista
        templateCard.querySelector('.duracion').textContent = element.duracion
        templateCard.querySelector('.btn').dataset.id = element.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)
}


function logout() {
    localStorage.setItem('cklogin', 0)
    nav.style.display = "none"
    window.location.href = "index.html"
    localStorage.removeItem('user')
}
items.addEventListener('click', e => {
    addReserva(e)
})

const addReserva = e => {
    if(e.target.classList.contains('btn')){
        setReserva(e.target.parentElement)
    }
    e.stopPropagation()
}

const setReserva = objeto => {
    const peli = {
        id: objeto.querySelector('.btn').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('span').textContent,
        sala: null,
        butacas: null,
        hora: null,
        numpersonas: 1
    }
        objeto.querySelector('.btn').disabled  = true;
        objeto.querySelector('.btn').innerHTML = "X";

    reserva[peli.id] = {...peli}
    localStorage.setItem('reserva', JSON.stringify(reserva))
    window.location.href = "reserva.html"
}