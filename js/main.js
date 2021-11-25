/* Declaracion de las constatnes */

const login = document.getElementById('login')
const nav = document.getElementById('nav')
var user = document.getElementById('user')
var users

if (localStorage.getItem('users') == null) {
    users = {}
} else {
    users = JSON.parse(localStorage.getItem('users'))
}

/* Declaracion de las funciones */

function inicio() {
    login.style.display = "flex"
}

function logout() {
    localStorage.setItem('cklogin', 0)
    nav.style.display = "none"
    login.style.display = "flex"
    window.location.href = "index.html";
    localStorage.removeItem('user')
}

login.addEventListener('click', button => {
    compLogin(button)
})

var compLogin = button => {
    var pass = document.getElementById('pass')
    if (button.target.classList.contains('entrar')) {
        if (user.value == '') {
            alert("Primerament has d'introduir un nom")
        } else if (pass.value == '') {
            alert("No t'oblidis de la contraseña!")
        } else {
            nav.style.display = "flex"
            login.style.display = "none"
            registro(user.value, pass.value)
            localStorage.setItem('user', user.value)
            localStorage.setItem('cklogin', 1)
        }
    }
}

var registro = (user, pass) => {
    const userObj = {
        user: user,
        pass: pass
    }

    if (users.hasOwnProperty(userObj.user)) {
        entrar(user)
    } else {
        newUser(userObj)
    }
}

const newUser = Objeto => {
    users[Objeto.user] = {...Objeto }
    localStorage.setItem('users', JSON.stringify(users))
    alert("Bienvenido por primera vez " + Objeto.user)
    window.location.href = "cartelera.html";
}

const entrar = user => {
    alert("Bienvenido de vuelta " + user)
    window.location.href = "cartelera.html";
}