import {nomeObjeto, pessoaX, usuario, cliente, pessoa} from '../arqvs/objetos.js';
import chalk from 'chalk';
// Exercício Proposto
// Percorrer o objeto para verificar se o mesmo possue dependentes
// Se tiver enviar uma menssagem na tela
console.log(usuario);
console.log('\n');
console.log(chalk.green('Verificar se o objeto possue dependentes'));
console.log('\n');
function ofertaSeguro(obj){
    const arrayChaves = Object.keys(obj);
    if(arrayChaves.includes("dependentes")){
        console.log(chalk.green(`Cliente ${obj.nome}, Você tem interesse em contratar um Seguro!`))
    }else{
        console.log(chalk.blue('O Cliente não possue dependentes'));
    }
    // console.log(arrayChaves);
}
ofertaSeguro(usuario);
//====================================================================================

// IMPORTANTE - Object.keys() - Object.values() - Object.entries()
console.log(chalk.blue('Object.keys(), Cria um ARRAY com todas as CHAVES'));
console.log(Object.keys(usuario));

console.log(chalk.blue('Object.values(), Cria um ARRAY com todos os VALORES'));
console.log(Object.values(usuario));

console.log(chalk.blue('Object.entries(), Cria um ARRAY com todas as PROPRIEDADES_key:value'));
console.log(Object.entries(usuario));