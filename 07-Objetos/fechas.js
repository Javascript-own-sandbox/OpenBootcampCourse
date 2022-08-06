const hoy = new Date()
console.log('hoy :>> ', hoy);
const miNacimiento = new Date(1984,4,18)
console.log('miNacimiento :>> ', miNacimiento);
let esMasTarde = hoy > miNacimiento;
console.log('esMasTarde :>> ', esMasTarde);
const dia = miNacimiento.getDate();
console.log('dia :>> ', dia);
const mes = miNacimiento.getMonth() + 1;
console.log('mes :>> ', mes);
const anio = miNacimiento.getFullYear();
console.log('anio :>> ', anio);
