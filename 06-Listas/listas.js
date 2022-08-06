let listaCompra = ['pan', 'leche', 'huevos', 'fruta', 'pistachos'];
console.log('listaCompra :>> ', listaCompra);
listaCompra.push('Aceite de Girasol')
console.log('listaCompra :>> ', listaCompra);
listaCompra.pop()
console.log('listaCompra :>> ', listaCompra);

let peli1 = {
    titulo: 'Batman',
    director: 'Matt Reeves',
    fecha: new Date(2022,1, 15)
}
let peli2 = {
    titulo: 'Inception',
    director: 'Christopher Nolan',
    fecha: new Date(2009, 11, 28)
}
let peli3 = {
    titulo: 'Dunkirk',
    director: 'Christopher Nolan',
    afecha: new Date(2017,2,22)
}
let listaPelis = [peli1, peli2, peli3];
let posteriores2010 = listaPelis.filter(pelicula => pelicula.fecha > new Date(2010,0,1))

console.log('posteriores2010 :>> ', posteriores2010);
let directores = listaPelis.map(pelicula =>{
    return pelicula.director;
})
let titulos = listaPelis.map(pelicula =>{
    return pelicula.titulo;
})
let directoresTitulos = directores.concat(titulos);
let directoresTitulosPropagacion = [...directores, ...titulos]

console.log('directoresTitulosPropagacion :>> ', directoresTitulosPropagacion);