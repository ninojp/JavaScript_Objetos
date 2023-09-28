const pessoas = require('./objetos');
// const {...pessoas} = require('./objetos'); //me parece igual ao acima
// const { pessoa, usuario, cliente, cliente2 } = require('./objetos');
const nomeObjeto = {
    nome: "Nino",
    idade: 42,
    altura: 1.79,
    peso: "76Kg",
    masculino: true,
    telefones: ["(48) 982666-666", 323334566],
    curriculo: {
        escolaridade: "segundo grau completo",
        experiencia: "na area de T.I"
    }
}
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

// Percorre o array.telefones da propridade do obj:nomeObjeto
nomeObjeto.telefones.forEach((chave) => console.log(chave));

// Exemplo para criar um array apartir das propriedades de um objeto.
const arrayKeys = Object.keys(nomeObjeto);
console.log(arrayKeys);//Cria um ARRAY com somente as CHAVES das propriedades do obj 

const arrayValues = Object.keys(nomeObjeto).map(propriedade => nomeObjeto[propriedade]);
console.log(arrayValues);//Cria um ARRAY com somente os VALORES das propriedades do obj 

// Faz a leitura do ARRAY com a lista CHAVES das propriedades do obj
//e mostra no console cada VALOR de cada propriedade do objeto
arrayKeys.forEach((chave) => console.log(nomeObjeto[chave]));


