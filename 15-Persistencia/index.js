const nombre = "Erica"
const apellido = "Arenas"
const persona = {    
    nombre: "Erica",
    apellido: "Arenas",
}
sessionStorage.setItem("personaSession", JSON.stringify(persona))
localStorage.setItem("personaLocal", JSON.stringify(persona))
// console.log(JSON.parse(personaSession))

/* Cookies */

// document.cookie = 'nombre-cookie=Erica-cookie'
// document.cookie = "nombreCaducidad=Nombre;expires="+ new Date(2023, 0, 1).toUTCString()
// console.log(document.cookie)

const now = new Date()
document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(now.getTime() + 2 * 60000)}`