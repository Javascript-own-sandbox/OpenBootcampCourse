const misDatos = {
    name: 'Erica',
    surname: 'Arenas',
    age: 38,
    height: 163,
    isDeveloper: true
}
console.log('misDatos :>> ', misDatos);
const miEdad = misDatos.age;
console.log('miEdad :>> ', miEdad);

const lista = [
    { ...misDatos},
    {
        name: 'Ruth',
        surname: 'Gomez',
        age: 42,
        height: 171,
        isDeveloper: false
    },
    {
        name: 'Paola',
        surname: 'Perez',
        age: 34,
        height: 163,
        isDeveloper: true
    }
]
const listaOrdenada = lista.sort((a,b) => b.age - a.age)
console.log('listaOrdenada :>> ', listaOrdenada);