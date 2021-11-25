const nav = document.getElementById('nav')

const fragment = document.createDocumentFragment()
var today = new Date();
var dd = today.getDay();
today = dd;
var reserva
var user = localStorage.getItem('user')
var salas
var aux = []


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
    nav.style.display = "flex"
    printAvion()
})

function logout() {
    localStorage.setItem('cklogin', 0)
    nav.style.display = "none"
    window.location.href = "index.html"
    localStorage.removeItem('user')
}

