import {nomeObjeto, pessoaX, usuario, cliente, pessoa} from '../arqvs/objetos.js';
import chalk from 'chalk';
// Exercício Proposto
console.log(usuario);

// Percorra o objeto para exibir as informações básicas do cliente
console.log(chalk.bgGreen.black('Exibindo as informações básicas do cliente'));
let relatorio="";
for(let info in usuario){
    if(typeof usuario[info] === 'object' || typeof usuario[info] === 'function'){
        continue
    }else{
        relatorio += `\n ${info} ==> ${usuario[info]}`;
    }
}
console.log(chalk.bgGreen.black(relatorio));
console.log('\n');