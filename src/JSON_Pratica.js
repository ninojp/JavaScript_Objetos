import chalk from 'chalk';
// const listaJSON = require("../JSON_testes.json");
// import listaJSON from "../JSON.json"
// const res = await fetch("../JSON.json");
// const listaJSON = await res. json();

// ERRO NÃO ESTÁ IMPORTANDO - Vou ler o artigo depois 
//https://cursos.alura.com.br/forum/topico-pegar-json-de-arquivo-externo-e-edita-lo-193319

// import { readFile } from 'fs/promises';
// const listaJSON = JSON.parse(await readFile('../JSON_testes.json', 'utf8'));

// console.log(listaJSON);

// Praticando a importação e converção de arquivos JSON
console.log(chalk.blue('Converção de arquivos JSON'));
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
console.log(jsonLivro)
//O resultado é um string JSON:
// {"id":50,"titulo":"Primeiros Passos com NodeJS","autor":"João Rubens","categoria":"programação","versoes":["ebook","impresso"]}

// Para fazer o processo inverso:
const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)
//===============================================================================================

// Nesta aula(Conjunto de videos), você aprendeu:
// Como percorrer objetos a partir das chaves com for...in, iterando sobre as propriedades de um objeto como em um array;
// Que para extrair chaves e valores de objetos é possível utilizar métodos de Object;
// Que funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;
// Que o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array.
