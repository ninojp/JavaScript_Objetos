import chalk from "chalk";
//Exercício Proposto
const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com"
}
console.log(colecionador);
// console.log(colecionador.nome);
// console.log(colecionador["nome"]);
console.log(chalk.bgBlue.white('Adicionando uma função, de criação automatizada'));
colecionador.adicionarTipo = function(propriedade,tipo){
this[propriedade].push(tipo)
}
for(let i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
  }
  console.log(colecionador);