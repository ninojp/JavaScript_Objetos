import chalk from "chalk";
import {nomeObjeto, pessoaX, usuario, cliente, pessoa} from "../arqvs/objetos.js"; //Funciona
// import {todos} from "../arqvs/objetos.js"; //Funciona
// import { pessoa2, pessoaX, usuario2 } from "../arqvs/objetos2.mjs"; //Funciona
// import pessoa from "../arqvs/objetos2.mjs"; //Funciona
// import { soma, multiplica, subtrai } from "../arqvs/objetos2.mjs";// Funciona
//---------------------------------------------------------------------------------------------
// IMPORTAÇÃO, no formato tradicional CJS(Common JavaScript)
// const {...pessoas} = require('./objetos'); //me parece igual ao acima
// const { pessoa, usuario, cliente, cliente2 } = require('./objetos');
//=============================================================================================

// console.log(pessoas, typeof pessoas); //Exibe um objeto, com outros {}object dentro
// console.log(pessoas.usuario.email); //Exibe o VALOR da CHAVE:email
// console.log(pessoas.usuario['email']);//LEMBRAR que usar notação entre aspas, 'string'
// console.log(pessoas.cliente.cpfCliente.substring(0,4)); //Exibi os 3 primeiros valores da chave cpf
// console.log(nomeObjeto,'\n');
// const pessoaCliente = pessoas.cliente //Cria um novo objeto, somente com o obj cliente
// const pessoaCliente = Object.create(nomeObjeto);
//Cria um novo objeto VAZIO, mas herda as PROPRIEDADES do objeto anterior, permitindo acessa-las 
// delete nomeObjeto.idade
// pessoaCliente.idade = 43;
// pessoaCliente.lastName = 'JP';
// console.log(pessoaCliente['idade']);
// console.log(pessoaCliente.telefones['1']); //Neste caso acessa o INDICE, pois é um array
// console.log(nomeObjeto);
// pessoaCliente.nomeCompleto = (pessoaCliente.nomeCliente+" "+pessoaCliente.lastName);
// console.log(nomeObjeto);
// console.log(pessoaCliente);
//----------------------------------------------------------------------------------------

// Nessa aula, você aprendeu:
// Que objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;
// Que a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };
// Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;
// Que para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.
//======================================================================================

// EXERCÍCIOS PROPOSTOS
// Exemplo para criar um array apartir das propriedades de um objeto.
console.log(chalk.bgBlue.white('Cria um ARRAY das KEYs, apartir das propriedades(key:value) do objeto'));
const arrayKeys = Object.keys(nomeObjeto);
console.log(arrayKeys);//Cria um ARRAY com somente as CHAVES das propriedades do obj 
console.log('\n');
// Le o ARRAY com a lista de CHAVES, feita apartir propriedades do obj e mostra no console cada VALOR de cada propriedade do objeto
console.log(chalk.bgBlue.white('Mostra no console cada VALOR de cada propriedade do objeto'));
arrayKeys.forEach((chave) => console.log(nomeObjeto[chave]));
console.log('\n');

console.log(chalk.bgBlue.white('Cria um ARRAY dos VALUEs, apartir das propriedades(key:value) do objeto'));
const arrayValues = Object.keys(nomeObjeto).map(propriedade => nomeObjeto[propriedade]);
console.log(arrayValues);//Cria um ARRAY com somente os VALORES das propriedades do obj 
console.log('\n');
//-------------------------------------------------------------------------------------------

// Adicionar dependetes, colocar um objeto dentro de outro 
console.log(chalk.bgBlue.white('Adicionar dependetes'));
pessoaX.Dependentes = [pessoa];
pessoaX.Dependentes.push(cliente);
// pessoaX.Dependentes = {cliente, pessoa}; //Cria um objetos com 2 objetos dentro
// pessoaX.Dependentes = [cliente, pessoa]; //Cria um array com 2 objetos dentro
console.log(pessoaX);
// const maisJovem = pessoaX.Dependentes.filter(dependente => dependente.idade===42)
const filtro = 29; //
const maisJovem = pessoaX.Dependentes.filter(dependente => dependente.idade <= filtro)
console.log(maisJovem);
// console.log(maisJovem[0]);
// console.log(maisJovem[1]);
console.log('\n');
//------------------------------------------------------------------------------------------

// Adicionar um Método, Função como propriedade de um objeto
console.log(chalk.bgBlue.white('Adicionar um Método, Função como propriedade de um objeto'));
nomeObjeto.saldo = 100;
nomeObjeto.depositar = function (valorRecebido) {this.saldo += valorRecebido}; //não aceitou arrow function
console.log(nomeObjeto);
nomeObjeto.depositar(50);
console.log(nomeObjeto);
console.log('\n');
//------------------------------------------------------------------------------------------

// Cópia e copia de Referência
// A variável objPersonagem2 não fez uma cópia do objeto original, 
//apenas serviu como referência para o objeto original objPersonagem. 
// Assim, qualquer alteração em qualquer um dos objetos altera ambos.
// Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original.
//mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):
console.log(chalk.bgBlue.white('Copia por Referência'));
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"
console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

//Como podemos contornar esse comportamento quando criamos objetos?
// Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():
console.log(chalk.bgBlue.white('Cópia, Criando um novo obj independente'));
const objPersonagens = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
const objPersonagens2 = Object.create(objPersonagens)
objPersonagens2.nome = "Gandalf, o Cinzento"
console.log(objPersonagens.nome) //Gandalf
console.log(objPersonagens2.nome) //Gandalf, o Cinzento
console.log('\n');
//------------------------------------------------------------------------------------------

// Nessa aula, você aprendeu:
// Que para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
// Que os valores em um objeto podem ser tipos primitivos (strings, números, booleanos e null), arrays ou outros objetos;
// Que além das propriedades, também podemos atribuir funções que dão comportamento a um objeto.
//==========================================================================================================================


// Novos testes, não deu depois vejo
// Percorre o array.telefones da propridade do obj:nomeObjeto
// const arrayKeysTels = Object.keys(nomeObjeto.telefones);
// arrayKeysTels.forEach((chave, valor) => {console.log(nomeObjeto.telefones[chave], nomeObjeto.telefones[valor])});
// console.log(`O nomeObjeto.telefones:${nomeObjeto['telefones']}`);
// console.log('\n');
// nomeObjeto.telefones.forEach((chave) => console.log(nomeObjeto.telefones[chave]));
//==========================================================================================

// Testes de IMPORTAÇÃO de objetos
// console.log(usuario);
// console.log(pessoa2, pessoaX, usuario2); //Importado, objetos2.mjs
// console.log(chalk.bgBlue.black("A Soma é:", soma(10,20)));//Importado, objetos2.mjs
// console.log('\n');

// console.log(todos); //Importado, objetos.js
// console.log([todos.usuario, todos.nomeObjeto]); //Importado, objetos.js
// console.log('\n');


