
const miPromesa = new Promise((resolve,reject)=> {
    const i = Math.floor(Math.random() * 2);
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))


/** Devuelve siempre true */
function alwaysTrue() {
    return true;
}

/** Funcion asíncrona que devuelve por consola un saludo, 5 segundos después de ejecutarse */
async function saludoDelayed() {
    setTimeout(() => {
        console.log("Hola soy una promesa");
    }, 5000);
}

function* idsPares() {
    let id = 0;
    while(true) {
        yield id+= 2; //esperando hasta que se vuelva a llamar
    }
}

const gen = idsPares();

console.log('gen.next() :>> ', gen.next());
console.log('gen.next() :>> ', gen.next().value);
console.log('gen.next() :>> ', gen.next());
console.log('gen.next() :>> ', gen.next().value);