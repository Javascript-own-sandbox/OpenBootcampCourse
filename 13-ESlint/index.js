/*eslint-disable*/
let myName = 'Erica';
/*eslint-enable*/
let mySurname = "Arenas"; //eslint-disable-line
let estudiante = myName.concat(" ", mySurname)
let estudianteMayus = estudiante.toUpperCase
let estudianteMinus = estudiante.toLowerCase
let estudianteLength = estudiante.length
// let firstLetterName = myName.slice(0,1);
let firstLetterName = myName.charAt(0)
let lastLetterSurname = mySurname.charAt(mySurname.length-1)
let noSpaces = estudiante.replace(" ", "")
let nameContent = (estudiante.includes(myName))? true: false
// eslint-disable-next-line no-undef
console.log("myName :>> ", nameContent)