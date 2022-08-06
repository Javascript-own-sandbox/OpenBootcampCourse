// import * as Controller from './modulosES6/controller'
import {suma, multiplica} from './modulosES6/controller.js';
import chalk from 'chalk';

let resultadoSuma1 = suma(1,2);
let resultadoSuma2 = suma(4,5);
let multiplicacion = multiplica(resultadoSuma1, resultadoSuma2);
console.log(chalk.green('multiplicacion :>> ', multiplicacion));