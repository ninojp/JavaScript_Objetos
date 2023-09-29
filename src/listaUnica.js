import { arrayObjetos } from "../arqvs/arrayObjetos.js";
import chalk from "chalk";

console.log(arrayObjetos);
console.log('\n');
// Exercício Proposto (Desestructuring, operador de Espalhamento)
// Percorrer o array de objetos e criar uma lista separada, com todos os dependentes
console.log(chalk.blue('Lista separada, com todos os dependentes'));
const listaDepentendes = [...arrayObjetos[0].dependentes,...arrayObjetos[1].dependentes,...arrayObjetos[2].dependentes];
// Importante lembrar que os OBJETOs estavam dentro de ARRAYs
console.log(listaDepentendes);

// NOVO ==> CONSOLE.TABLE(), para exibir em forma de tabela 
console.table(listaDepentendes);
//========================================================================================

// Exemplo de uso do spread operator, ou sintaxe de espalhamento. Este operador copia
//as propriedades de objetos para outros, “espalhando” os conteúdos.
console.log(chalk.blue('Exemplo de uso do spread operator'));
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }
// Vamos agora tentar juntar esses dois objetos em apenas um, que vamos chamar de guerreiro.
const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)
console.table(guerreiro)
// O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados;
//o nome de cada variável agora é uma chave e o valor da chave é cada um dos objetos:
//---------------------------------------------------------------------------------------
const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro }
// Aqui entramos com o spread operator, adicionando a sintaxe de três pontos (reticências) 
//antes do nome de cada objeto literal, com cada objeto separado por vírgula:
console.log(guerreiro2)
console.table(guerreiro2)
//========================================================================================

