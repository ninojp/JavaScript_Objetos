// Criado apenas para ser um modulo, para ser acessado externante
// Criado apenas para praticar.
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
const pessoaX = {
    nome:"XBanner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
}
let usuario = {
    nome:"Bruce2 Banner2",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
}
let cliente = {
    nomeCliente:"Andre",
    idade:36,
    cpfCliente:"12543652266",
    email:"andre@email.com"
  }
var pessoa = {
    nome:"Nino",
    idade:42,
    cpf:"12543652266",
    email:"sem@email.com"
  }
export {nomeObjeto, pessoaX, usuario, cliente, pessoa}; //funciona

export const todos = {nomeObjeto, pessoaX, usuario, cliente, pessoa}; //funciona





